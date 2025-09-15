"use client";

import React, { useState } from "react";
import { useStore } from "@/services/state";
import { Contacts } from "./Contacts";

export const OrderForm = () => {
  const { cart } = useStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="px-6 pt-6 pb-12 rounded-b-xl bg-white text-[var(--brown)]">
      <form
        onSubmit={handleSubmit}
        
      >
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="border-2 border-[var(--rosewood)] rounded-xl bg-[var(--cream)]">
            <h2 className="p-4 text-2xl text-center font-bold">Contacts:</h2>
            <Contacts formData={formData} setFormData={setFormData} />
          </div>

          <div className="border-2 border-[var(--rosewood)] rounded-xl bg-[var(--cream)]">
            <h2 className="p-4 text-2xl text-center font-bold text-[var(--brown)]">
              Order:
            </h2>
          </div>
        </div>

        <div className="flex justify-between px-10">
          <p className="text-xl font-semibold">TOTAL PRICE:</p>
          <button
            type="submit"
            className="w-1/4 bg-[var(--brown)] text-white font-bold py-2 rounded-lg hover:bg-[var(--blush)] hover:text-[var(--brown)] transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
