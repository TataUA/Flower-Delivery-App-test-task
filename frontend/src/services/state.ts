import { create } from "zustand";
import { IShop, IProduct, IOrder, ICartItem } from "@/types/types";

interface StoreState {
  shops: IShop[];
  activeShopId: string;
  productsByShop: Record<string, IProduct[]>;
  cart: ICartItem[];
  orders: IOrder[];

  setShops: (shops: IShop[]) => void;
  setActiveShop: (id: string) => void;
  setProductsByShop: (shopId: string, products: IProduct[]) => void;
  addToCart: (item: Omit<ICartItem, "quantity">) => void;
  removeFromCart: (shopId: string, productId: string) => void;
  clearCart: () => void;
  setOrders: (orders: IOrder[]) => void;
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

  removeFromCart: (shopId, productId) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.shopId === shopId && item.productId === productId)
      ),
    })),

  clearCart: () => set({ cart: [] }),
  setOrders: (orders) => set({ orders }),
}));
