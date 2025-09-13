import { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: Date;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = model<IUser>("Shop", userSchema);
