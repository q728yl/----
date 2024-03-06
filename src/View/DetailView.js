import React, {useState} from "react";
import {Button, Col, message, Modal, Row} from "antd";
import {Link, useNavigate, useParams} from "react-router-dom";
import ActivityDetails from "../Component/Activity/ActivityDetails";
import activities from "../Component/Activity/Activities";
import {postSignupData} from "../Services/SignupService";
import {getUser} from "../Services/UserService";

const ActivityDetail = () => {
    // console.log("ActivityDetail",ActivityId);
    // const activity = activities[ActivityId - 1];

    const {activityId} = useParams();
    const navigate = useNavigate();// 获取navigate对象
    const handleAddToCartButtonClick = () => {
        // 添加到感兴趣活动列表的逻辑
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        postSignupData({userId: user.userId, actId: activityId});
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleGoBack = () => {
        navigate(-1); // 调用navigate返回上一页
    };

    return (
        <div>
            <ActivityDetails/>
            <div style={{ marginBottom: '20px' }}></div>
            <Row gutter={16}>
                <Col span={12} >
                    <Button type="primary" style={{marginLeft:'500px'}} onClick={showModal}>立刻报名</Button>
                    <Modal title="报名确认" open={isModalOpen} onOk={handleOk}  onCancel={handleCancel}
                           okText="确定"
                           cancelText="取消">
                        <p>请确认报名本活动。</p>
                    </Modal>

                </Col>
                <Col span={12}>
                    {/*<Button type="primary" onClick={handleAddToCartButtonClick}>*/}
                    {/*    添加到感兴趣活动列表*/}
                    {/*</Button>*/}
                    <Button type="primary" onClick={handleGoBack}>
                        返回
                    </Button>
                </Col>
            </Row>
        </div>
    );
};



export default ActivityDetail;
