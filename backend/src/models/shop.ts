import { Schema, model } from "mongoose";

export interface IShop {
  name: string;
}

const shopSchema = new Schema<IShop>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export const Shop = model<IShop>("Shop", shopSchema);
