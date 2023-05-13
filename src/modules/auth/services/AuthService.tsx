import axiosInstance from "@/common/libs/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type LoginParams = {
  payload: { email: string; password: string };
};

export type RegisterParams = {
  payload: { username: string; password: string };
};

export type MeParams = {
  config: AxiosRequestConfig;
};

export type LoginResponse = {
  data: {
    accessToken: string;
  };
  error: boolean;
  expiredAt: string;
};

const AuthService = {
  login: async ({ payload }: LoginParams) => {
    return axiosInstance.post("/api/auth/login", payload);
  },
  register: async ({ payload }: RegisterParams) => {
    return axiosInstance.post("/register", payload);
  },
  me: async ({ config }: MeParams) => {
    return axiosInstance.get("/api/auth/me", config);
  },
};

export default AuthService;
