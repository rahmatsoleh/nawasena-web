import { useMutation } from "@tanstack/react-query";
import AuthService, {
  LoginParams,
  LoginResponse,
} from "../../services/AuthService";
import { AxiosResponse } from "axios";

import Cookies from "js-cookie";

type UseLoginMutationParams = {};
const useLoginMutation = ({}: UseLoginMutationParams) => {
  return useMutation<AxiosResponse<LoginResponse>, any, LoginParams["payload"]>(
    {
      mutationFn: async (data) => {
        const responseToken = await AuthService.login({
          payload: data,
        });

        const accessToken = responseToken.data.accessToken;

        if (!accessToken) {
          throw new Error("Access token not found");
        }

        const responseUser = await AuthService.me({
          config: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        });

        const user = responseUser.data;

        if (!user) {
          throw new Error("User not found");
        }

        Cookies.set(
          "user",
          JSON.stringify({
            ...user,
            ...responseToken.data,
          })
        );

        return responseToken;
      },
    }
  );
};

export default useLoginMutation;
