import axiosInstance from "@/common/libs/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type LoginParams = {
  payload: { username: string; password: string };
};

export type RegisterParams = {
  payload: { username: string; password: string };
};

export type MeParams = {
  config: AxiosRequestConfig;
};

export type LoginResponse = {
  accessToken: string;
  error: boolean;
  expiredAt: string;
};

const AuthService = {
  login: async ({ payload }: LoginParams) => {
    return axiosInstance.post("/login", payload);
  },
  register: async ({ payload }: RegisterParams) => {
    return axiosInstance.post<AxiosResponse<LoginResponse>>(
      "/register",
      payload
    );
  },
  me: async ({ config }: MeParams) => {
    return axiosInstance.get("/me", config);
  },
};

export default AuthService;
