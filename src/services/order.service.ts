import { instance } from "@/api/api.intercepter";
import { IOrder } from "@/types/order.interface";
import axios from "axios";

const ORDERS = "http://localhost:3169/api/orders";

export const OrderService = {
  async getAll() {
    return axios<IOrder[]>({
      url: ORDERS,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default OrderService;
