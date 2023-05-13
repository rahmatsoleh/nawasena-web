import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { DehydratedState } from "@tanstack/react-query";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type LibAppProps = {
  dehydratedState: DehydratedState;
};

export type AppPropsWithLayout = AppProps<LibAppProps> & {
  Component: NextPageWithLayout<LibAppProps>;
};
