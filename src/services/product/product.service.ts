import {
  PRODUCTS,
  TypeProductData,
  TypeProductDataFilters,
} from "./product.types";
import { IProduct, TypePaginationProducts } from "@/types/product.interface";
import axios from "axios";

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    const { data } = await axios<TypePaginationProducts>({
      url: PRODUCTS,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      params: queryData,
    });

    return data;
  },
  async getSimilar(productId: string | number) {
    return axios<IProduct[]>({
      url: `${PRODUCTS}/similar/${productId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getBySlug(slug: string) {
    return axios<IProduct[]>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getByCategory(categorySlug: string) {
    return axios<IProduct[]>({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getById(id: string) {
    return axios<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async create() {
    return axios<IProduct>({
      url: PRODUCTS,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async update(id: string | number, data: TypeProductData) {
    return axios<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { name },
    });
  },
  async delete(id: string | number) {
    return axios<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default ProductService;
