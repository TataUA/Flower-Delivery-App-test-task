"use client";

import React, { useEffect, useState } from "react";
import { useStore } from "@/services/state";
import toast, { Toaster } from "react-hot-toast";
import { createOrder, getProductsByIds } from "@/services/api";
import { Contacts } from "./Contacts";
import { CartList } from "./CartList";
import { IProduct } from "@/types/types";

export interface IProductWithQuantity extends IProduct {
  quantity: number;
}

export const CartForm = () => {
  const { cart, clearCart } = useStore();
  const [products, setProducts] = useState<IProductWithQuantity[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (cart.length === 0) {
      setProducts([]);
      return;
    }

    const productsIds = cart.map((item) => item.productId);

    const fetchData = async () => {
      const fetchedProducts = await getProductsByIds(productsIds);

      const productsWithQuantity = fetchedProducts
        .map((product) => {
          const cartItem = cart.find((item) => item.productId === product._id);
          if (!cartItem) return null;
          return { ...product, quantity: cartItem.quantity };
        })
        .filter((product): product is IProductWithQuantity => product !== null);

      setProducts(productsWithQuantity);
    };

    fetchData();
  }, [cart]);

  const totalPrice = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) return;

    const orderItems = products.map((product) => ({
      productId: product._id,
      quantity: product.quantity,
      shopId: product.shopId,
    }));

    try {
      const response = await createOrder({ user: formData, items: orderItems });

      if (response?.orderIds?.length) {
        if (response.orderIds.length === 1) {
          toast.success(
            `Your order has been created. Order ID: ${response.orderIds[0]}`,
            {
              duration: Infinity,
            }
          );
        } else {
          toast.success(
            `Your orders have been created from different shops. Order IDs: ${response.orderIds.join(
              ", "
            )}`,
            {
              duration: Infinity,
            }
          );
        }
      }

      clearCart();
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (err) {
      console.error("Order failed", err);
      toast.error("Failed to create order. Please try again.", {
        duration: Infinity,
      });
    }
  };

  return (
    <div className="px-6 pt-6 pb-12 rounded-b-xl bg-white text-[var(--brown)]">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="border-2 border-[var(--rosewood)] rounded-xl bg-[var(--cream)]">
            <h2 className="p-4 text-2xl text-center font-bold">Contacts:</h2>
            <Contacts formData={formData} setFormData={setFormData} />
          </div>

          <div className="border-2 border-[var(--rosewood)] rounded-xl bg-[var(--cream)]">
            <h2 className="p-4 text-2xl text-center font-bold text-[var(--brown)]">
              Order:
            </h2>
            <CartList products={products} />
          </div>
        </div>

        <div className="flex justify-between px-10">
          <p className="text-xl font-semibold">
            TOTAL PRICE:{" "}
            <span className="text-2xl font-bold">${totalPrice}</span>
          </p>
          <button
            type="submit"
            className="w-1/4 bg-[var(--brown)] text-white font-bold py-2 rounded-lg hover:bg-[var(--blush)] hover:text-[var(--brown)] transition"
          >
            Submit
          </button>
        </div>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
