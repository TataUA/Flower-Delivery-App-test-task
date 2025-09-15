import React from "react";
import { IProductWithQuantity } from "./CartForm";
import { CartItem } from "./CartItem";

export interface CartListProps {
  products: IProductWithQuantity[];
}

export const CartList = ({ products }: CartListProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-full p-4 pb-12 rounded-2xl">
      {products.length === 0 ? (
        <p className="text-ml text-center font-bold">
          Your cart is empty :(
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {products.map((product) => (
            <li key={product._id}>
              <CartItem product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
