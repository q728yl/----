import React from "react";
import { Form, Input, Button, Select } from "antd";
import {checkNewName} from "../Services/UserService";

const { Option } = Select;

const CreateUserForm = ({ onFinish }) => {
    const [form] = Form.useForm();

    // const onGenderChange = (value) => {
    //     switch (value) {
    //         case "male":
    //             form.setFieldsValue({ gender: 0 });
    //             return;
    //         case "female":
    //             form.setFieldsValue({ gender: 1 });
    //             return;
    //         default:
    //             form.setFieldsValue({ gender: null });
    //             return;
    //     }
    // };
    const checkName = async (rule,value) => {
        const result = await checkNewName(value);
        return result ? Promise.resolve() : Promise.reject('用户名已被注册');
    };

    const validateMessages = {
        required: "此项为必填项",
        types: {
            email: "请输入有效的电子邮件地址",
        },
    };

    return (
        <Form name="create_user" form={form} onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name="username"
                rules={[{ required: true }, { validator: checkName }]}
                label="用户名"
            >
                <Input placeholder="用户名" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true }]}
                label="密码"
            >
                <Input.Password placeholder="密码" />
            </Form.Item>

            <Form.Item
                name="gender"
                rules={[{ required: true }]}
                label="性别"
            >
                <Select placeholder="选择性别" >
                    <Option value="male">男</Option>
                    <Option value="female">女</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="nickname"
                rules={[{ required: true }]}
                label="昵称"
            >
                <Input placeholder="昵称" />
            </Form.Item>

            <Form.Item
                name="college"
                rules={[{ required: true }]}
                label="学院"
            >
                <Select placeholder="选择学院" >
                    <Option value="1">电子信息与电气工程学院</Option>
                    <Option value="2">机械与动力工程学院</Option>
                    <Option value="3">船舶海洋与建筑工程学院</Option>
                    <Option value="4">生物医学工程学院</Option>
                    <Option value="5">设计学院</Option>
                    <Option value="6">材料科学与工程学院</Option>
                    <Option value="7">能源与动力工程学院</Option>
                    <Option value="8">环境科学与工程学院</Option>
                    <Option value="9">化学化工学院</Option>
                    <Option value="10">数学科学学院</Option>
                    <Option value="11">物理与天文学院</Option>
                    <Option value="12">人文学院</Option>
                    <Option value="13">安泰经济与管理学院</Option>
                    <Option value="14">外国语学院</Option>
                    <Option value="15">农业与生物学院</Option>
                    <Option value="16">医学院</Option>
                    <Option value="17">凯原法学院</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name="stu_id"
                rules={[{ required: true }]}
                label="学号"
            >
                <Input placeholder="学号" />
            </Form.Item>

            <Form.Item
                name="mail"
                rules={[
                    {
                        required: true,
                        type: "email",
                    }
                ]}
                label="邮箱"
            >
                <Input placeholder="邮箱地址" />
            </Form.Item>

            <Form.Item name="club" label="社团">
                <Input placeholder="社团（可选）" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    确认创建用户
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateUserForm;
