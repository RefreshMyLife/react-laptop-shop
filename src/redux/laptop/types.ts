export enum Status {
  SUCCESS = 'success',
  LOADING = 'loading',
  ERROR = 'error',
}
export type SearchLaptopArgs = {
  currentPage: string;
  category: string;
  search: string;
  activeSort: string;
  sortBy: string;
};
export type LaptopItem = {
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

export interface LaptopSliceState {
  items: LaptopItem[];
  status: string;
}
