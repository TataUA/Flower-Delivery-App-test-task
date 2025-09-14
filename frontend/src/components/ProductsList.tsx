"use client";

import React, { useEffect, useState } from "react";
import { useStore } from "@/services/state";
import { getProductsByShop } from "@/services/api";
import { Loader } from "./Loader";
import { ProductCard } from "./ProductCard";

export const ProductsList = () => {
  const [loading, setLoading] = useState(true);
  const { activeShopId, productsByShop, setProductsByShop } = useStore();
  const products = productsByShop[activeShopId] || [];

  useEffect(() => {
    if (!activeShopId) return;

    const fetchData = async () => {
      setLoading(true);

      if (!productsByShop[activeShopId]) {
        const data = await getProductsByShop(activeShopId);
        if (data) setProductsByShop(activeShopId, data);
      }
      setLoading(false);
    };

    fetchData();
  }, [activeShopId, productsByShop, setProductsByShop]);

  return (
    <div className="p-4">
      {!activeShopId || loading ? (
        <Loader />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product._id}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                />
              </li>
            ))
          ) : (
            <li className="text-center text-[var(--brown)]">
              No products available
            </li>
          )}
        </ul>
      )}
    </div>
  );
};
