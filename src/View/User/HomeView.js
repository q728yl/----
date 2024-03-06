import { Layout, Menu, Input } from "antd";
import React, { useState } from "react";
// import ActivityList from "../../Component/ActivityList";
// import PersonView from "../PersonView";
import ActivityView from "../ActivityView";
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import "../../css/HomeView.css";
import ChatView from "../ChatView";
import InfoView from "../InfoView";
import MomentsView from "../MomentsView";
import { UserOutlined } from "@ant-design/icons";
import {getUser, jaccountProfile, sendToken} from "../../Services/UserService";
import { Button, Avatar } from "antd";
import ActivityDetail from "../DetailView";
import MyActivity from "./MyActivity";
import ActivityAboutMe from "./ActivityAboutMe";
const { Header, Content } = Layout;
const { Search } = Input;

/**
 * @description: 活动页面
 * 顶部菜单栏+活动列表
 * 包含组件ActivityList：活动列表
 * 页面跳转未完成
 */
const HomeView = () => {
    const [selectedKey, setSelectedKey] = useState("home");
    const [isLoading3, setIsLoading3] = useState(true);

    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    console.log("code");
    console.log(code);

    if (isLoading3 && code !== null) {
        // 发送POST请求以获取访问令牌
        jaccountProfile(code, (data) => {
            console.log("accesstokenbody here!");
            console.log(data);
            console.log("accesskeyhere");
            console.log(data.access_token);
            sendToken(data.access_token, (data2) => {
                console.log("data2 here");
                console.log(data2);
                // localStorage.setItem('user', JSON.stringify(data2));
                // setIsLoading3(false);
                // window.location.reload();
            });

            setIsLoading3(false);
        });
    }


    const handleMenuClick = ({ key }) => {
        setSelectedKey(key);
    };
    const handleJaccountLogin=()=> {
        window.location.href = "https://jaccount.sjtu.edu.cn/oauth2/authorize?response_type=code&scope=profile&client_id=ov3SLrO4HyZSELxcHiqS&redirect_uri=http://localhost:3000";
    };

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true); // 定义isLoading来判断异步请求是否完成
    const [isLoading2, setIsLoading2] = useState(true); // 定义isLoading来判断异步请求是否完成

    const userData = JSON.parse(localStorage.getItem("user"));

    if (isLoading && userData !== null && userData.userId !== null) {
        // getUserByUserId(userData.userId, (data) => {
        //     // console.log("data here");
        //     // console.log(data);
        //     // setIsLoading(true);
        //     if (data.nickname !== null) {
        //         setUser(data);
        //         //localStorage.setItem('userInfo', JSON.stringify(data));
        //         setIsLoading(false);
        //         // window.location.reload();
        //     }
        // });
        const user = getUser(userData.userId)
        console.log("user here", user);
            if (user.nickname !== null) {
                setUser(user);
                //localStorage.setItem('userInfo', JSON.stringify(data));
                setIsLoading(false);
                // window.location.reload();
            }
    }

    // console.log("user");
    // console.log(user);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser({ userId: null });
        if (isLoading2 === true) {
            if (user.userId !== null) {
                setIsLoading2(false);
            }
        }
        // console.log("logout button is clicked");
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
                        // alignItems: "center"
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
                            {/*{items.map((item) => (*/}
                            {/*    <Menu.Item key={item.key}>{item.label}</Menu.Item>*/}
                            {/*))}*/}
                            <Menu.Item key="home">
                                <Link to="/">活动大厅</Link>
                            </Menu.Item>
                            <Menu.Item key="my_activities">
                                <Link to="/myactivity">我的活动</Link>
                            </Menu.Item>
                            <Menu.Item key="moment">
                                <Link to="/moment">交集广场</Link>
                            </Menu.Item>
                            {/*<Menu.Item key="chat">*/}
                            {/*    <Link to="/chat">聊天室</Link>*/}
                            {/*</Menu.Item>*/}
                            <Menu.Item key="person">
                                <Link to="/info">个人中心</Link>
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
                                <Button onClick={handleJaccountLogin} type="link" >
                                    第三方登录
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
                    <Route path="/" element={<ActivityView />} />
                    <Route path="/chat" element={<ChatView />} />
                    <Route path="/info" element={<InfoView />} />
                    <Route path="/moment" element={<MomentsView />} />
                    <Route path="/activity/:activityId" element={<ActivityDetail />} />
                    <Route path="/myactivity" element={<ActivityAboutMe />} />
                </Routes>

                {/*<Content className="background">*/}
                {/*    <div style={{ width:'100%' }}>*/}
                {/*        {items.map((item) =>*/}
                {/*            item.key === selectedKey ? item.content : null*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</Content>*/}
            </Layout>
        </div>
    );
};

export default HomeView;
