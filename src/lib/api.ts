import axios from "axios";

const API_URL = "http://localhost:5000/api";

// آبجکت api برای ذخیره توابع مختلف
const api = {
  // تابع برای ثبت‌نام کاربر
  registerUser: async (data: { name: string; email: string; password: string }) => {
    const res = await axios.post(`${API_URL}/auth/register`, data);
    return res.data;
  },

  // تابع برای لاگین کاربر
  loginUser: async (data: { email: string; password: string }) => {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    return res.data;
  }
};

export default api; // ارسال به صورت default
