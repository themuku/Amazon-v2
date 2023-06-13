export const PRODUCTS = "http://localhost:3169/api/products";

export type TypeProductData = {
  name: string;
  price: number;
  description?: string;
  images: string[];
  categoryId: number;
};

export type TypeProductDataFilters = {
  sort?: EnumProductSort;
  searchTerm?: string;
  page?: string | number;
  perPage?: string | number;
};

export enum EnumProductSort {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest",
}
