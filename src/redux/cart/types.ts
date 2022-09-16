export type CartItem = {
  id: string;
  name: string;
  price: number;
  count: number;
  imageurl: string;
  screendiagonal: number[];
  operationalmemory: number[];
  screentechnology: string[];
  diskconfiguration: string[];
  casematerial: number[];
};
export interface CartSliceState {
  totalPrice: number;
  totalCount: number;
  items: CartItem[];
}
