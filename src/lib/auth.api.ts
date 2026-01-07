import api from "@/lib/api"; // وارد کردن api به صورت default
import { AxiosError } from "axios"; // وارد کردن AxiosError
import { ApiResponse, LoginRequest, LoginResponse } from "@/types/api";

// تابع برای انجام درخواست لاگین
export const loginRequest = async (payload: LoginRequest) => {
  try {
    const res = await api.loginUser(payload); // استفاده از loginUser
    return res.data; // داده‌های مورد نظر رو برمی‌گردونه
  } catch (err: unknown) {
    // از type assertion استفاده می‌کنیم تا مطمئن بشیم که err از نوع AxiosError هست
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || "Login failed");
    } else {
      // اگر خطای دیگه‌ای بود، پیغام عمومی نمایش داده می‌شود
      throw new Error("An unknown error occurred");
    }
  }
};

// تابع برای انجام درخواست ثبت‌نام
export const registerRequest = async (payload: { name: string; email: string; password: string }) => {
  try {
    const res = await api.registerUser(payload); // استفاده از registerUser
    return res.data; // داده‌های مورد نظر رو برمی‌گردونه
  } catch (err: unknown) {
    // از type assertion استفاده می‌کنیم تا مطمئن بشیم که err از نوع AxiosError هست
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data?.message || "Registration failed");
    } else {
      // اگر خطای دیگه‌ای بود، پیغام عمومی نمایش داده می‌شود
      throw new Error("An unknown error occurred");
    }
  }
};
