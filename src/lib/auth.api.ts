import { api } from "@/lib/api";
import { ApiResponse, LoginRequest, LoginResponse } from "@/types/api";

export const loginRequest = async (payload: LoginRequest) => {
  const res = await api.post<ApiResponse<LoginResponse>>(
    "/auth/login",
    payload
  );
  return res.data.data;
};
