import {
  ICreateOrderRequest,
  ICreateOrderResponse,
  IProduct,
  IShop,
} from "@/types/types";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getShops = async () => {
  try {
    const { data } = await instance.get<IShop[]>("/api/shops");
    return data;
  } catch (error) {
    console.error("Failed to load shops:", error);
    return [];
  }
};

export const getProductsByShop = async (id: string) => {
  try {
    const { data } = await instance.get<IProduct[]>(`/api/products/${id}`);
    return data;
  } catch (error) {
    console.error("Failed to load products by shop:", error);
    return [];
  }
};

export const getProductsByIds = async (productIds: string[]) => {
  try {
    const { data } = await instance.post<IProduct[]>(
      `/api/products/products-by-id`,
      { productIds }
    );
    return data;
  } catch (error) {
    console.error("Failed to load products by ids:", error);
    return [];
  }
};

export const createOrder = async ({ user, items }: ICreateOrderRequest) => {
  try {
    const { data } = await instance.post<ICreateOrderResponse>(`/api/orders`, {
      user,
      items,
    });
    return data;
  } catch (error) {
    console.error("Failed to create order:", error);
    throw error;
  }
};
