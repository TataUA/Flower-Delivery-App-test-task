import { Request, Response } from "express";
import { Shop, Product } from "../models";

export const getAllShops = async (req: Request, res: Response) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getShopById = async (req: Request, res: Response) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });
    res.json(shop);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProductsByShop = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ shopId: req.params.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
