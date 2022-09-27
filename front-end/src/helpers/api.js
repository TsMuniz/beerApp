import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(async (config) => {
  const user = localStorage.getItem('user');

  if (token) {
    config.headers.Authorization = user.token;
  }

  return config;
});

export default api;
