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
