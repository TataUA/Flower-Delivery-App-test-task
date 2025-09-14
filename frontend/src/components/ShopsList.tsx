"use client";

import React, { useEffect, useState } from "react";
import { getShops } from "@/services/api";
import { useStore } from "@/services/state";
import { Loader } from "./Loader";

export const ShopsList = () => {
  const [loading, setLoading] = useState(true);
  const { shops, setShops, activeShopId, setActiveShop } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShops();
      if (data) {
        setShops(data);
      }

      if (data.length > 0) {
        setLoading(false);
        setActiveShop(data[0]._id);
      }
    };

    fetchData();
  }, []);

  function handleShopClick(id: string) {
    setActiveShop(id);
    return id;
  }

  return (
    <div className="min-h-20 flex-1 overflow-y-auto p-4">
      {loading ? (
        <Loader />
      ) : (
        <ul className="flex flex-col gap-4 text-[var(--brown)] text-center">
          {shops.map((shop) => (
            <li
              key={shop._id}
              className={`p-2 border border-[var(--rosewood)] rounded-xl ${
                activeShopId === shop._id
                  ? "bg-[var(--blush)]"
                  : "bg-[var(--cream)]"
              } cursor-pointer hover:scale-101 transition-scale duration-200`}
              onClick={() => handleShopClick(shop._id)}
            >
              {shop.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
