import axios from 'axios';
import {getToken} from "./authService";

const apiClient = axios.create({
  baseURL: 'http://localhost:5042/api',
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;