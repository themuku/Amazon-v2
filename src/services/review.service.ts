import { instance } from "@/api/api.intercepter";
import { IReview } from "@/types/review.interface";
import axios from "axios";

const REVIEWS = "http://localhost:3169/api/reviews";

type TypeData = {
  rating: number;
  text: string;
};

export const ReviewService = {
  async getAll() {
    return axios<IReview[]>({
      url: REVIEWS,
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
  },
  async leave(productId: string | number, data: TypeData) {
    return axios<IReview>({
      url: `${REVIEWS}/leave/${productId}`,
      method: "POST",
      data,
      headers: {
        "Content-type": "application/json",
      },
    });
  },
};

export default ReviewService;
