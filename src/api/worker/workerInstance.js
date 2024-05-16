import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:9170/api/",
  baseURL: 'http://34.207.143.20/api/'
});

axiosInstance.interceptors.request.use(
  (config) => {
    const Token = localStorage.getItem("jwt");
    if (Token) {
      config.headers["Workerauth"] = `Bearer ${Token}`;
    }
    config.withCredentials = true
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;


