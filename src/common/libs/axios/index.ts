import axios from "axios";
import Cookies from "js-cookie";
import Router from "next/router";

const user = Cookies.get("user");
const parsedUser = user ? JSON.parse(user) : null;

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    ...(parsedUser && { Authorization: `Bearer ${parsedUser.accessToken}` }),
  },
});

// remove token from header if it is expired
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove("user");
      Router.push("/login");
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
