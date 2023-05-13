// import "antd/dist/reset.css";
import "@/styles/globals.css";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { AppPropsWithLayout } from "@/common/types";
import { ConfigProvider } from "antd";
import MainLayout from "@/components/layouts/MainLayout";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#1363DF",
              fontFamily: "Inter",
            },
          }}
        >
          {getLayout(<Component {...pageProps} />)}
        </ConfigProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
