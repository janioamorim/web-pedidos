import { LoginResponse } from "../models/Auth";
import api from "./api";

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/proof/session", { email, password });
  return response.data;
};
