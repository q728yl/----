
import { Layout, theme } from "antd";
import React from "react";
import MyBreadcrumb from "../component/breadcrumb";
import DateReminder from "../component/calendar";
import MyCard from "../component/card";
import MyHeader from "../component/header";
import MySider from "../component/sider";
import MyUserInfo from "../Component/UserInfo/MyUserInfo";
import Notification from "../component/notification";

import "../css/profileView.css";

const { Content } = Layout;

const ProfileView = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken();
    return (
        <Layout>
            <MyHeader />
            <Layout>
                <MySider />
                <Layout
                    style={{
                        padding: "0 24px 24px"
                    }}
                >
                    <MyBreadcrumb />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer
                        }}
                    >
                        {/* <MyCard /> */}
                        <h1 className="h1"> 个人信息</h1>
                        {/* <UserInfo /> */}
                        <MyUserInfo/>
                        <h1 className="h1"> 未来日程</h1>
                        <DateReminder />
                        <h1 className="h1"> 消息通知</h1>
                        <Notification />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default ProfileView;

