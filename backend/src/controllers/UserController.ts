import { Request, Response } from "express";
import { User } from "../models";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, address } = req.body;
    if (!name || !email || !phone || !address) {
      return res.status(400).json({ message: "Missed required field" });
    }

    let user = await User.findOne({ email, phone });
    if (!user) {
      user = await User.create({ name, email, phone, address });
    }

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { email, phone } = req.body;
    if (!email || !phone)
      return res.status(400).json({ message: "Email and phone required" });

    const user = await User.findOne({ email, phone });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
