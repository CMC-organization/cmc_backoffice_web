import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';

const api = axios.create({
 baseURL: 'http://localhost:8080',
 timeout: 30000,
});

api.interceptors.request.use(
 async (config) => {
  const token = secureLocalStorage.getItem('@USER_TOKEN');

  if (token) {
   config.headers['Authorization'] = token;
  }

  return config;
 },
 (error) => {
  return Promise.reject(error);
 },
);

export default api;
