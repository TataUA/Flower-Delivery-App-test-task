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

export interface ICartItem {
  shopId: string;
  productId: string;
  quantity: number;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface ICreateOrderRequest {
  user: IUser;
  items: ICartItem[];
}

export interface ICreateOrderResponse {
  message: string;
  orderIds: string[];
}
