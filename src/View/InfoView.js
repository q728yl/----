import React from "react";
import DateReminder from "../Component/calendar";
import Notification from "../Component/notification";
import {Content} from "antd/es/layout/layout";
import UserInfo from "../Component/UserInfo/userInfo";
import { Empty,Button } from "antd";

const InfoView = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("InfoView",user);

    return (
        <div>
            {!user ?(
                <div>
                    <h1 className="h1"> 请登录查看信息</h1>
                    <Empty>
                        <Button href="/login">点击登录</Button>
                    </Empty>
                </div>
            ):(
                <div>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {/* <MyCard /> */}
                        <h1 className="h1"> 个人信息</h1>
                        {/* <UserInfo /> */}
                        <UserInfo/>
                        <h1 className="h1"> 未来日程</h1>
                        <DateReminder />
                        <h1 className="h1"> 消息通知</h1>
                        <Notification />
                    </Content>
                </div>
            )
            }
        </div>
    );
};
export default InfoView;