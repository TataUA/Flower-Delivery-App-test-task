import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ShoppingBasket } from "lucide-react";

export const Header = () => {
  return (
    <header>
      <div className="max-w-[1200px] mx-auto px-6 py-4 rounded-t-xl bg-white">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center ">
            <Image src="/rose.png" alt="rose logo" width={40} height={40} />
            <span className="text-[var(--brown)] text-xl font-bold hover:text-[var(--blush)] transition-colors duration-200">
              Flowers Delivery
            </span>
          </Link>
          <Link
            href="/cart"
            className="text-[var(--brown)] hover:text-[var(--blush)] transition-colors duration-200"
          >
            <ShoppingBasket size={40} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
