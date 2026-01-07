import api from "@/lib/api"; // وارد کردن api به صورت default
import { ApiResponse, LoginRequest, LoginResponse } from "@/types/api";

export const loginRequest = async (payload: LoginRequest) => {
  const res = await api.loginUser(payload);  // استفاده از loginUser از api
  return res.data.data;
};
