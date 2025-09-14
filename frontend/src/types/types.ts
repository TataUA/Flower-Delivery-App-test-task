export interface IShop {
  _id: string;
  name: string;
}

export interface IProduct {
  _id: string;
  shopId: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface IOrder {
  _id: string;
  productId: string;
  quantity: number;
  createdAt: string;
}

export interface ICartItem {
  shopId: string;
  productId: string;
  quantity: number;
}
