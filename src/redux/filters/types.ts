export enum SortProperty {
  RATING = 'rating',
  TITLE = 'title',
  PRICE = 'price',
}
export type Sort = {
  name: string;
  sortProperty: SortProperty.RATING | SortProperty.TITLE | SortProperty.PRICE;
};
export interface FilterSliceState {
  searchValue: string;
  currentPage: number;
  categoryId: number;
  sort: Sort;
}
