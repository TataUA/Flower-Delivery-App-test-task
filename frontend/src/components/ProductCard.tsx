import React from "react";
import Image from "next/image";
import { useStore } from "@/services/state";
import { IProduct } from "@/types/types";

export const ProductCard = ({
  _id,
  shopId,
  name,
  price,
  imageUrl,
}: IProduct) => {
  const { addToCart } = useStore();

  return (
    <div className="border border-[var(--rosewood)] rounded-xl p-2 flex flex-col items-center bg-[var(--cream)] shadow-md">
      <div className="w-full h-68 relative mb-2">
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lm text-[var(--brown)] font-semibold mb-2 truncate max-w-full">
        {name}
      </h3>
      <div className="flex justify-between items-center w-full">
        <p className="text-[var(--brown)] font-bold">{`Price: $${price}`}</p>
        <button
          type="button"
          onClick={() => addToCart({ shopId, productId: _id })}
          className="bg-[var(--rosewood)] text-white px-4 py-2 rounded-full hover:bg-[var(--blush)] hover:text-[var(--brown)] transition cursor-pointer"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
