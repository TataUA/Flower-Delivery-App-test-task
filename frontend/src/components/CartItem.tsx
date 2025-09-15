"use client";

import React from "react";
import Image from "next/image";
import { useStore } from "@/services/state";
import { IProductWithQuantity } from "./CartForm";

interface CartItemProps {
  product: IProductWithQuantity;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { addToCart, decreaseFromCart } = useStore();

  return (
    <div className="flex flex-col md:flex-row border border-[var(--rosewood)] rounded-xl p-2 items-center bg-white shadow-md">
      <div className="w-[100px] h-[100px] relative flex-shrink-0 mb-2 md:mb-0 md:mr-4">
        <Image
          alt={product.name}
          src={product.imageUrl}
          fill
          style={{ objectFit: "cover", borderRadius: "0.75rem" }}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col mb-2">
          <p className="font-semibold">{product.name}</p>
          <p>
            Price: <span className="font-semibold">${product.price}</span>
          </p>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => decreaseFromCart(product._id)}
              className="w-6 h-8 px-1 py-1 border rounded bg-[var(--blush)] hover:scale-102 cursor-pointer"
            >
              -
            </button>
            <div className="w-10 h-8 flex justify-center items-center border rounded">
              {product.quantity}
            </div>
            <button
              type="button"
              onClick={() =>
                addToCart({ shopId: product.shopId, productId: product._id })
              }
              className="w-6 h-8 px-1 py-1 border rounded bg-[var(--blush)] hover:scale-102 cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
