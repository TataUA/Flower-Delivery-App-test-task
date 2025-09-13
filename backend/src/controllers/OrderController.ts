import { Request, Response } from "express";
import { User, Product, IOrderItem, Order } from "../models";
import { Types } from "mongoose";

export interface IRequestOrder {
  userId: string;
  items: IOrderItem[];
}

const groupByShop = (items: IOrderItem[]): Record<string, IOrderItem[]> => {
  return items.reduce((acc: Record<string, IOrderItem[]>, item) => {
    const shopId = item.shopId.toString();
    if (!acc[shopId]) acc[shopId] = [];
    acc[shopId].push(item);
    return acc;
  }, {});
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, items }: IRequestOrder = req.body;

    if (!userId || !items || !items.length) {
      return res.status(400).json({ message: "userId and items are required" });
    }

    if (!Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid userId" });
    }

    const userExists = await User.findById(userId);
    if (!userExists) return res.status(404).json({ message: "User not found" });

    const grouped = groupByShop(items);
    const orders = [];

    for (const shopId of Object.keys(grouped)) {
      const shopItems = grouped[shopId];
      let totalPrice = 0;

      for (const item of shopItems) {
        const product = await Product.findById(item.productId);
        if (!product)
          return res
            .status(400)
            .json({ message: `Product ${item.productId} not found` });
        totalPrice += product.price * item.quantity;
      }

      const order = await Order.create({
        userId,
        items: shopItems,
        totalPrice,
      });

      orders.push(order);
    }

    return res.status(201).json({
      message: "Orders created successfully",
      orderIds: orders.map((order) => order._id),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
