import { instance } from "@/api/api.intercepter";
import { IPaymentResponse } from "@/types/payment.interface";

const PAYMENT = "http://localhost:3169/api/payment";

export const PaymentService = {
  async createPayment(amount: number) {
    return instance.post<IPaymentResponse>(PAYMENT, { amount });
  },
};

export default PaymentService;
