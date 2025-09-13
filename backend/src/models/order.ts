import { Schema, Types, model } from "mongoose";

export interface IOrderItem {
  productId: Types.ObjectId;
  quantity: number;
  shopId: Types.ObjectId;
}

export interface IOrder {
  userId: Types.ObjectId;
  items: IOrderItem[];
  totalPrice: number;
}

const orderItemSchema = new Schema<IOrderItem>({
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, min: 1 },
  shopId: { type: Schema.Types.ObjectId, ref: "Shop", required: true },
});

const orderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    items: { type: [orderItemSchema], required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", orderSchema);
