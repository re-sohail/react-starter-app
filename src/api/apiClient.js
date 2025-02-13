import axios from 'axios';
import { Navigate } from 'react-router-dom';

const baseURL = 'http://example.com/api/';

const apiClient = axios.create({
  baseURL,
  timeout: 10000,
  //   headers: {
  //     Authorization: "Api-Key 7Em5MXu6.kMc78KOzqXmqtBGoyYD6OGLdmSP1GEr6",
  //   },
});

apiClient.interceptors.request.use(
  config => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { status } = error.response || {};
    if (status === 401) {
      localStorage.removeItem('authToken');
      //   window.location.href = '/login';
      Navigate('/auth/login');
    } else if (status === 403) {
      console.error('Access to this route is restricted.');
    }
    return Promise.reject(error);
  },
);

function setAuthToken(token) {
  if (token) {
    localStorage.setItem('authToken', token);
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('authToken');
    delete apiClient.defaults.headers.common['Authorization'];
  }
}

export { setAuthToken };
export default apiClient;
