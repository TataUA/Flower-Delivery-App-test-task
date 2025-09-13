import { Schema, model } from "mongoose";

export interface IShop {
  name: string;
  createdAt?: Date;
}

const shopSchema = new Schema<IShop>({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Shop = model<IShop>("Shop", shopSchema);
