import {
  PRODUCTS,
  TypeProductData,
  TypeProductDataFilters,
} from "./product.types";
import { instance } from "@/api/api.intercepter";
import { IProduct } from "@/types/product.interface";

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    return instance<IProduct[]>({
      url: PRODUCTS,
      method: "GET",
      params: queryData,
    });
  },
  async getSimilar(productId: string | number) {
    return instance<IProduct[]>({
      url: `${PRODUCTS}/similar/${productId}`,
      method: "GET",
    });
  },
  async getBySlug(slug: string) {
    return instance<IProduct[]>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: "GET",
    });
  },
  async getByCategory(categorySlug: string) {
    return instance<IProduct[]>({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: "GET",
    });
  },
  async getById(id: string) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: "GET",
    });
  },
  async create() {
    return instance<IProduct>({
      url: PRODUCTS,
      method: "POST",
    });
  },
  async update(id: string | number, data: TypeProductData) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: "PUT",
      data: { name },
    });
  },
  async delete(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: "DELETE",
    });
  },
};

export default ProductService;
