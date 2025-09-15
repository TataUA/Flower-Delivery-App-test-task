import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models";

export const getProductsByShop = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({
      shopId: new mongoose.Types.ObjectId(req.params.id),
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const { productIds } = req.body;

    if (!Array.isArray(productIds) || productIds.length === 0) {
      return res.status(400).json({ message: "Product IDs are required" });
    }

    const objectIds = productIds.map(
      (id: string) => new mongoose.Types.ObjectId(id)
    );

    const products = await Product.find({
      _id: {
        $in: objectIds,
      },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
