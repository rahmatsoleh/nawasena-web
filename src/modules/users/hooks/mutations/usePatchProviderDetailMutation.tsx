import { useMutation, useQueryClient } from "@tanstack/react-query";
import UsersService, {
  PatchProviderDetailParams,
} from "../../services/UsersService";
import { UsersKeys } from "../../utils/Keys";

type UsePatchProviderDetailMutationParams = {};
const usePatchProviderDetailMutation =
  ({}: UsePatchProviderDetailMutationParams) => {
    const query = useQueryClient();
    return useMutation<
      {},
      any,
      PatchProviderDetailParams["body"] & {
        email: string;
      }
    >({
      mutationFn: ({ email, ...data }) => {
        return UsersService.patchProviderDetail({
          config: {
            params: {
              email,
            },
          },
          body: data,
        });
      },
      onSettled: () => {
        query.invalidateQueries([UsersKeys.all]);
      },
    });
  };

export default usePatchProviderDetailMutation;
