import { Button, Form, Input, message } from "antd";
import React from "react";
import axios from "axios";
import Link from "next/link";
import useLoginMutation from "../hooks/mutations/useLoginMutation";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { mutateAsync } = useLoginMutation({});

  const handleSubmit = async (data: any) => {
    try {
      const response = await mutateAsync({
        username: data.email as string,
        password: data.password as string,
      });
      message.success("Login success");
    } catch (error) {
      console.error(error);
      // check is axios error
      if (axios.isAxiosError(error)) {
        message.warning(error?.response?.data?.message);
      }
    }
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
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
      <Button htmlType="submit">Login</Button>
      <Link href="/register">Register</Link>
    </Form>
  );
};

export default LoginForm;
