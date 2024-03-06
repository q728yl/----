import React, {useState} from "react";
import {Form, Input, Button, Row, Col, Modal, message} from "antd";
import { Card as AntCard } from "antd";
import "../css/SignUp.css";
import {getUser} from "../Services/UserService";
import {postSignupData} from "../Services/SignupService";

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



const ReleaseForm = ({ ActivityId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleConfirmSignUp = (formData) => {
        console.log(ActivityId);
        const { name, content, location, signupTime, activityTime, departments, college, grade, club, recruitmentNumber, organizer, suScore, laborHour } = formData;

        // 判断是否有输入报名年级限制，学院限制，社团限制
        const gradeRestriction = grade !== "" ? grade : null;
        const collegeRestriction = college !== "" ? college : -1;
        const clubRestriction = club !== "" ? club : null;

        const requestData = {
            userId: 0,
            name,
            content,
            location,
            signupTime,
            activityTime,
            departments,
            grade: gradeRestriction,
            college: collegeRestriction,
            club: clubRestriction,
            recruitmentNumber,
            organizer,
            suScore,
            laborHour,
            status: 1,
            photo: "jdnxwjdxj",
        };

        console.log(requestData);

        // 发送请求等其他逻辑...
        fetch('/api/release', {
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
                    alert("活动发布成功！")
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
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        const user = getUser();
        if(user == null){
            message.error("请先登录");
            setIsModalOpen(false);
            return;
        }
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onRelease = () => {
        setIsModalOpen(false);
    };
    const onSave = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="card-container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Button type="primary"  onClick={showModal}>发布活动</Button>
                <Modal title="活动发布" open={isModalOpen} footer={null} onOk={handleOk}  onCancel={handleCancel}>

                    <div className="ant-card-body">
                        <Form {...layout}  name="basic" onFinish={handleConfirmSignUp}>

                            <Form.Item
                                label="活动名称"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入活动名称！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="活动内容"
                                name="content"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入活动内容！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="活动地点"
                                name="location"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入活动地点！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="可报名时段"
                                name="signupTime"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入可报名时段！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="活动举办时间"
                                name="activityTime"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入活动举办时间！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="活动主办单位"
                                name="departments"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入活动主办单位！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            {/*<Form.Item*/}
                            {/*    label="活动报名限制"*/}
                            {/*    name="signupRestriction"*/}
                            {/*    rules={[*/}
                            {/*        {*/}
                            {/*            required: true,*/}
                            {/*            message: "请输入活动报名限制！",*/}
                            {/*        },*/}
                            {/*    ]}*/}
                            {/*>*/}
                            {/*    <Input />*/}
                            {/*</Form.Item>*/}
                            <Form.Item
                                label="报名学院限制"
                                name="college"
                                rules={[
                                    {
                                        required: false,
                                        message: "请输入报名学院限制！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="报名年级限制"
                                name="grade"
                                rules={[
                                    {
                                        required: false,
                                        message: "请输入报名年级限制！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="报名社团限制"
                                name="club"
                                rules={[
                                    {
                                        required: false,
                                        message: "请输入报名社团限制！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="报名人数上限"
                                name="recruitmentNumber"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入报名人数上限！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="活动组织者"
                                name="organizer"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入活动组织者！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="素拓奖励"
                                name="suScore"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入素拓奖励！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="劳动学时"
                                name="laborHour"
                                rules={[
                                    {
                                        required: true,
                                        message: "请输入劳动学时数！",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Button type="primary" htmlType="submit" onClick={onRelease}>
                                            确认发布
                                        </Button>
                                    </Col>
                                    <Col span={12}>
                                        <Button onClick={onSave}>保存草稿</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form>
                    </div>
                </Modal>
            </div>

        </div>
    );
};

export default ReleaseForm;