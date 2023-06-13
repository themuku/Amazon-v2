import { instance } from "@/api/api.intercepter";
import { ICategory } from "@/types/category.interface";
import axios from "axios";

const CATEGORIES = "http://localhost:3169/api/categories";

export const CategoryService = {
  async getAll() {
    return axios<ICategory[]>({
      url: CATEGORIES,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getById(id: string | number) {
    return axios<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async getBySlug(slug: string) {
    return axios<ICategory>({
      url: `${CATEGORIES}/by-slug/${slug}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async create() {
    return axios<ICategory>({
      url: CATEGORIES,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async update(id: string | number, name: string) {
    return axios<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: { name },
    });
  },
  async delete(id: string | number) {
    return axios<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default CategoryService;
