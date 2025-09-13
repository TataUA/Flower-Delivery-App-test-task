import { Schema, Types, model } from "mongoose";

export interface IProduct {
  shopId: Types.ObjectId;
  name: string;
  price: number;
  imageUrl: string;
  createdAt?: Date;
}

const productSchema = new Schema<IProduct>({
  shopId: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Product = model<IProduct>("Product", productSchema);
