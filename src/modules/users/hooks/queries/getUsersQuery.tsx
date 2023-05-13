import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { UsersKeys } from "../../utils/Keys";
import UsersService, { GetUsersResponse } from "../../services/UsersService";

export type UseCompanyQueryProps = {
  queryParams: Partial<{}>;
  options?: UseQueryOptions<GetUsersResponse>;
};

const useUsersQuery = ({ queryParams, options }: UseCompanyQueryProps) => {
  return useQuery({
    queryKey: [UsersKeys.all, queryParams],
    queryFn: async () => {
      const res = await UsersService.getUsers({
        config: {
          params: {
            role: "provider",
          },
        },
      });

      return res.data;
    },
    ...options,
  });
};

export default useUsersQuery;
