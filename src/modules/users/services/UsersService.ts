import axiosInstance from "@/common/libs/axios";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export type ProviderDetail = {
  id: string;
  isVerified: boolean;
  joinRequestFileUrl: null;
  userId: string;
};
export type GetUsersParams = {
  config: AxiosRequestConfig;
};

export type PatchProviderDetailParams = {
  config: AxiosRequestConfig;
  body: Partial<ProviderDetail>;
};

export type GetUsersResponse = {
  error: boolean;
  message: string;
  data: {
    id: string;
    email: string;
    password: string;
    phoneNumber: string;
    name: string;
    role: string;
    isConfirmed: boolean;
    ProviderDetail: ProviderDetail;
  }[];
};

const UsersService = {
  getUsers: async ({ config }: GetUsersParams) => {
    return axiosInstance.get<GetUsersResponse>("/api/users", config);
  },
  patchProviderDetail: async ({ config, body }: PatchProviderDetailParams) => {
    return axiosInstance.patch<GetUsersResponse>(
      "/api/users/provider-detail",
      body,
      config
    );
  },
};

export default UsersService;
