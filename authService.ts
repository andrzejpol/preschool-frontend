import axios from 'axios';

const API_AUTH_URL = 'http://localhost:5042/api/auth';
const API_URL = 'http://localhost:5042/api';

export const login = async (email, password) => {
  const response = await axios.post(`${API_AUTH_URL}`, {email, password});
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);

  return response.data;
}

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
}