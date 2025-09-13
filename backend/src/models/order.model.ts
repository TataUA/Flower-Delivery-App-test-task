import { Schema, Types, model } from "mongoose";

export interface IOrderItem {
  productId: Types.ObjectId;
  quantity: number;
}

export interface IOrder {
  userId: Types.ObjectId;
  shopId: Types.ObjectId;
  items: IOrderItem[];
  totalPrice: number;
  createdAt?: Date;
}

const orderItemSchema = new Schema<IOrderItem>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = new Schema<IOrder>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  shopId: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
  items: { type: [orderItemSchema], required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Order = model<IOrder>("Order", orderSchema);
