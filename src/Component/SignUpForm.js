// import React from "react";
// import { Form, Input, Button, Row, Col } from "antd";
// import { Card as AntCard } from "antd";
// import "../css/SignUp.css";
//
// const layout = {
//     labelCol: {
//         span: 4,
//     },
//     wrapperCol: {
//         span: 24,
//     },
// };
//
// const tailLayout = {
//     wrapperCol: {
//         offset: 4,
//         span: 24,
//     },
// };
//
// const SignUpForm = ({ onFinish, onFinishFailed }) => {
//     const handleConfirmSignUp = () => {
//         onFinish();
//     };
//
//     return (
//         <div className="card-container" style={{ marginLeft: "200px", marginRight: "200px" }}>
//             <AntCard className="activity-card ant-card-hoverable">
//                 <div className="ant-card-head">
//                     <h2 className="ant-card-head-title">填写报名信息</h2>
//                 </div>
//                 <div className="ant-card-body">
//                     <Form {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
//                         <Form.Item
//                             label="姓名"
//                             name="name"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: "请输入姓名！",
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//
//                         <Form.Item
//                             label="学号"
//                             name="studentId"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: "请输入学号！",
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//
//                         <Form.Item
//                             label="学院"
//                             name="department"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: "请输入学院！",
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//
//                         <Form.Item
//                             label="手机号码"
//                             name="phone"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: "请输入手机号码！",
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//
//                         <Form.Item
//                             label="邮箱"
//                             name="email"
//                             rules={[
//                                 {
//                                     type: "email",
//                                     message: "请输入正确的邮箱地址！",
//                                 },
//                                 {
//                                     required: true,
//                                     message: "请输入邮箱地址！",
//                                 },
//                             ]}
//                         >
//                             <Input />
//                         </Form.Item>
//
//                         <Form.Item {...tailLayout}>
//                             <Row gutter={16}>
//                                 <Col span={12}>
//                                     <Button type="primary" onClick={handleConfirmSignUp}>
//                                         确认报名
//                                     </Button>
//                                 </Col>
//                                 <Col span={12}>
//                                     <Button style={{ marginLeft: 16 }}>取消报名</Button>
//                                 </Col>
//                             </Row>
//                         </Form.Item>
//                     </Form>
//                 </div>
//             </AntCard>
//         </div>
//     );
// };
//
// export default SignUpForm;


import React from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { Card as AntCard } from "antd";
import "../css/SignUp.css";

const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 17,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 7,
        span: 17,
    },
};



    const SignUpForm = ({ ActivityId }) => {
        const handleConfirmSignUp = (formData) => {
            console.log(ActivityId);
            const requestData = {
                userId: 1,
                activityId: ActivityId,
                ...formData,
            };
            console.log(requestData);

            // 发送请求等其他逻辑...
            fetch('/api/handleSignup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        // 处理报名成功的逻辑
                        console.log(data.msg);
                        console.log(data.data);
                        alert("报名表单已提交，报名成功！")
                    } else {
                        // 处理报名失败的逻辑
                        console.error(data.msg);
                        alert(data.msg)
                    }
                })
                .catch(error => {
                    // 处理错误信息
                    console.error(error);
                });

        };





    return (
        <div className="card-container">
            <AntCard className="activity-card ant-card-hoverable">
                <div className="ant-card-head">
                    <h2 className="ant-card-head-title">填写报名信息</h2>
                </div>
                <div className="ant-card-body">
                    <Form {...layout} name="basic" onFinish={handleConfirmSignUp}>
                        <Form.Item
                            label="姓名"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入姓名！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="学号"
                            name="studentId"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入学号！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="学院"
                            name="college"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入学院！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="年级"
                            name="grade"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入年级！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="社团"
                            name="club"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入所属社团！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="手机号码"
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "请输入手机号码！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="邮箱"
                            name="mail"
                            rules={[
                                {
                                    type: "email",
                                    message: "请输入正确的邮箱地址！",
                                },
                                {
                                    required: true,
                                    message: "请输入邮箱地址！",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Button type="primary" htmlType="submit">
                                        确认报名
                                    </Button>
                                </Col>
                                <Col span={12}>
                                    <Button >取消报名</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </div>
            </AntCard>
        </div>
    );
};

export default SignUpForm;
