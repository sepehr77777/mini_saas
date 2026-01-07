import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = {
  registerUser: async (data: { name: string; email: string; password: string }) => {
    const res = await axios.post(`${API_URL}/auth/register`, data);
    return res.data;
  },

  loginUser: async (data: { email: string; password: string }) => {
    const res = await axios.post(`${API_URL}/auth/login`, data);
    return res.data;
  }
};

export default api; // ارسال به صورت default
