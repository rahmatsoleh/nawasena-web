import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { CategoryProduct } from "../../utils/Keys";
import CategoryProductService, {
  GetAllResponse,
} from "../../services/CategoryProductService";

export type UseCategoryProductQueryProps = {
  queryParams: Partial<{}>;
  options?: UseQueryOptions<GetAllResponse>;
};

const useCategoryProductQuery = ({
  queryParams,
  options,
}: UseCategoryProductQueryProps) => {
  return useQuery({
    queryKey: [CategoryProduct.all, queryParams],
    queryFn: async () => {
      const res = await CategoryProductService.getAll({
        config: {},
      });

      return res.data;
    },
    ...options,
  });
};

export default useCategoryProductQuery;
