import axios from "axios";
import useAuthStore from "../store/auth.store";

const authAxiosAPI = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

authAxiosAPI.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default authAxiosAPI;
