import LoginForm from "@/modules/auth/components/LoginForm";
import React from "react";

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;

LoginPage.getLayout = (page: any) => {
  return <>{page}</>;
};
