import { IProduct, IShop } from "@/types/types";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getShops = async () => {
  try {
    const { data } = await instance.get<IShop[]>("/api/shops");
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to load shops:", error);
    return [];
  }
};

export const getProductsByShop = async (id: string) => {
  try {
    const {data} = await instance.get<IProduct[]>(`/api/products/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to load shops:", error);
    return [];
  }
};
