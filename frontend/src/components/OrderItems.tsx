import React from "react";
import { ICartItem } from "@/types/types";

interface OrderItemsProps {
  cart: ICartItem[];
}

export const OrderItems = ({ cart }: OrderItemsProps) => {
  
  return (
    <div className="flex flex-col gap-4 max-w-full p-4 pb-12 rounded-2xl">
      
    </div>
  );
};
