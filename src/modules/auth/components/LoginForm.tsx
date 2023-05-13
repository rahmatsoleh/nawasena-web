import { Button, Form, Input, message } from "antd";
import React from "react";
import axios from "axios";
import useLoginMutation from "../hooks/mutations/useLoginMutation";
import Router from "next/router";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { mutateAsync, isLoading } = useLoginMutation({});

  const handleSubmit = async (data: any) => {
    try {
      await mutateAsync({
        email: data.email as string,
        password: data.password as string,
      });

      Router.push("/");
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        message.warning(error?.response?.data?.message);
        return;
      }

      message.error("Something went wrong");
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <div className="min-h-screen bg-[#F1F6F9] flex justify-center items-center">
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
              Login
            </h1>
          </div>
          <div className="space-y-4">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <div className="text-center mt-6">
            <Button
              type="primary"
              htmlType="submit"
              className="!w-64 !text-white !bg-primary !rounded-2xl"
              loading={isLoading}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
