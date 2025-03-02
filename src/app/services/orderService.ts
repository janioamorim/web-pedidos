import { Order } from "../models/Order";
import api from "./api";

interface ApiResponse<T> {
  data: T;
}

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get<ApiResponse<Order[]>>("/proof/dashboard");
  return response.data.data;
};
