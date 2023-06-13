import { instance } from "@/api/api.intercepter";
import { IReview } from "@/types/review.interface";
import axios from "axios";

const STATISTICS = "http://localhost:3169/api/statistics";

export type TypeStatisticsResponse = {
  name: string;
  value: number;
}[];

export const StatisticsService = {
  async getMain() {
    return axios<TypeStatisticsResponse>({
      url: `${STATISTICS}/main`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default StatisticsService;
