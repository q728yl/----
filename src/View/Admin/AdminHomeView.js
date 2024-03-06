import { Layout, Menu, Input } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../../css/HomeView.css";
import { UserOutlined } from "@ant-design/icons";
import {getUser} from "../../Services/UserService";
import { Button, Avatar } from "antd";
import AdminHistoryView from "./AdminHistoryView";
import PersonView from "../PersonView";
import ManageView from "./ManageView";
import AdminUserView from "./AdminUserView";
const { Header, Content } = Layout;

/**
 * @description: 活动页面
 * 顶部菜单栏+活动列表
 * 包含组件ActivityList：活动列表
 * 页面跳转未完成
 */
const HomeView = () => {
    const [selectedKey, setSelectedKey] = useState("adminHome");

    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
    };

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); // 定义isLoading来判断异步请求是否完成
    const [isLoading2, setIsLoading2] = useState(true); // 定义isLoading来判断异步请求是否完成

    const userData = JSON.parse(localStorage.getItem("user"));

    if (isLoading && userData !== null && userData.userId !== null) {
        const user = getUser(userData.userId)
        console.log("user here", user);
            if (user.nickname !== null) {
                setUser(user);
                //localStorage.setItem('userInfo', JSON.stringify(data));
                setIsLoading(false);
                // window.location.reload();
            }
    }

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser({ userId: null });
        if (isLoading2 === true) {
            if (user.userId !== null) {
                setIsLoading2(false);
            }
        }
        window.location.reload();
    };

    return (
        <div>
            <Layout className="background">
                <Header
                    style={{
                        backgroundColor: "rgb(240,248,255)",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            selectedKeys={[selectedKey]}
                            onClick={handleMenuClick}
                            defaultSelectedKeys={["home"]}
                            style={{ lineHeight: "64px" ,lineWidth:"300px",backgroundColor: 'rgb(255,255,255,0)'}}
                        >
                            <Menu.Item key="adminHome">
                                <Link to="/admin/home">管理活动</Link>
                            </Menu.Item>
                            <Menu.Item key="adminHistory">
                                <Link to="/admin/history">审核记录</Link>
                            </Menu.Item>
                            <Menu.Item key="adminPerson">
                                <Link to="/admin/info">个人中心</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div style={{ float: "right" }}>
                        {/* <div style={{  display: "flex", alignItems: "center" }}> */}
                        {isLoading ? (
                            <>
                                <h-white style={{ margin: "0px 16px 0px 0px", color:"rgb(0,0,0)"}}>Hello!</h-white>
                                <UserOutlined
                                    style={{ margin: "0px 8px", color: "#000", fontSize: "20px" }}
                                />
                                <Button type="link" href="/login" >
                                    点击登录
                                </Button>
                            </>
                        ) : (
                            <>
                                <Avatar src={user.avatar} style={{ margin: "0px 8px" }} />
                                <h-white style={{ marginLeft: "8px" , color:"rgb(0,0,0)"}}>
                                    Hello，{user.nickname} !
                                </h-white>
                                <Button onClick={handleLogout} style={{ marginLeft: "10px" }}>
                                    登出
                                </Button>
                            </>
                        )}
                    </div>
                </Header>
                <Routes>
                    <Route path="/" element={<ManageView />} />
                    <Route path="/admin/home" element={<ManageView />} />
                    <Route path="/admin/history" element={<AdminHistoryView />} />
                    <Route path="/admin/info" element={<AdminUserView />} />
                </Routes>

            </Layout>
        </div>
    );
};

export default HomeView;
