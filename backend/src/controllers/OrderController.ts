import { Request, Response } from "express";
import { Types } from "mongoose";
import { User, Product, IOrderItem, Order, IUser } from "../models";

export interface IRequestOrder {
  user: IUser;
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
    const { user, items }: IRequestOrder = req.body;

    if (!user || !user.email || !user.phone || !items || !items.length) {
      return res
        .status(400)
        .json({ message: "Email, phone and items are required" });
    }

    let existingUser = await User.findOne({
      email: user.email,
      phone: user.phone,
    });

    if (!existingUser) {
      existingUser = await User.create(user);
    }

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
        userId: existingUser._id,
        items: shopItems.map((i) => ({
          productId: new Types.ObjectId(i.productId),
          shopId: new Types.ObjectId(i.shopId),
          quantity: i.quantity,
        })),
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
