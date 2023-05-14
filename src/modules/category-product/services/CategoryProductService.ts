import axiosInstance from "@/common/libs/axios";
import { AxiosRequestConfig } from "axios";

export type GetAllParams = {
  config: AxiosRequestConfig;
};

export type GetAllResponse = {
  error: boolean;
  message: string;
  data: {
    id: string;
    name: string;
  }[];
};

const CategoryProductService = {
  getAll: async ({ config }: GetAllParams) => {
    return axiosInstance.get<GetAllResponse>("/api/category-product", config);
  },
};

export default CategoryProductService;
