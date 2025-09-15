import { create } from "zustand";
import { IShop, IProduct, ICartItem } from "@/types/types";

interface StoreState {
  shops: IShop[];
  activeShopId: string;
  productsByShop: Record<string, IProduct[]>;
  cart: ICartItem[];

  setShops: (shops: IShop[]) => void;
  setActiveShop: (id: string) => void;
  setProductsByShop: (shopId: string, products: IProduct[]) => void;
  addToCart: (item: Omit<ICartItem, "quantity">) => void;
  decreaseFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  shops: [],
  activeShopId: "",
  productsByShop: {},
  cart: [],
  orders: [],

  setShops: (shops) => set({ shops }),
  setActiveShop: (id) => set({ activeShopId: id }),
  setProductsByShop: (shopId, products) =>
    set((state) => ({
      productsByShop: { ...state.productsByShop, [shopId]: products },
    })),
  addToCart: ({ shopId, productId }) =>
    set((state) => {
      const existing = state.cart.find(
        (item) => item.shopId === shopId && item.productId === productId
      );
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.shopId === shopId && item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        cart: [...state.cart, { shopId, productId, quantity: 1 }],
      };
    }),

  decreaseFromCart: (productId) =>
    set((state) => {
      const existing = state.cart.find((item) => item.productId === productId);
      if (!existing) return { cart: state.cart };

      if (existing.quantity <= 1) {
        return {
          cart: state.cart.filter((item) => item.productId !== productId),
        };
      } else {
        return {
          cart: state.cart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      }
    }),

  clearCart: () => set({ cart: [] }),
}));
