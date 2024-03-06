import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "../css/LoginView.css";
import * as userService from "../Services/UserService";
import { useNavigate } from "react-router-dom";
import CreateUserForm from "../Component/CreateUserForm";
import { Modal } from "antd";
import {history} from "../utils/history";

const LoginView = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    userService.login(values);
  };

  const [showCreateUserForm, setShowCreateUserForm] = useState(false);

  const onCreateUserFinish = async (values) => {
    console.log("Received values of form: ", values);
    await userService.createUser(values).then((result) => {
    console.log(result);
    });
    setShowCreateUserForm(false);
  };
  const handleCostomer = () => {
    localStorage.removeItem("user");
    // console.log("logout button is clicked");
    history.push("/");
    window.location.reload();
  }

  const showCreateUserModal = () => setShowCreateUserForm(true);

  return (
      <div className="login-view-container">
        <div className="login-form-container">
          <h1>交   集</h1>
          <h4 style={{ textAlign: 'right' }}>—— 连接你与世界</h4>
          <Form
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              style={{ width: 300 }}
          >
            <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入用户名!" }]}
            >
              <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="用户名"
              />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  style={{ width: "100%" }}
                  className="login-btn"
              >
                登 陆
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                  type="primary"
                  onClick={handleCostomer}
                  loading={loading}
                  style={{ width: "100%" }}
                  className="login-btn"
              >
                游 客 登 陆
              </Button>
            </Form.Item>
            <Form.Item>
              <a href="#" >
                第三方登陆
              </a>{"  "}
               | <a href="#" onClick={showCreateUserModal}>新注册用户</a>
            </Form.Item>
          </Form>
          <Modal
              title="创建用户"
              visible={showCreateUserForm}
              footer={null}
              onCancel={() => setShowCreateUserForm(false)}
          >
            <CreateUserForm onFinish={onCreateUserFinish} />
          </Modal>
        </div>
      </div>
  );
};

export default LoginView;
