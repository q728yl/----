
import {
    CalendarOutlined,
    NotificationOutlined,
    UserOutlined,
    MessageOutlined
} from "@ant-design/icons";
import { Menu, Layout, theme } from "antd";
import React from "react";
const { Sider } = Layout;

const items2 = [
    {
        key: "sub1",
        icon: <UserOutlined />,
        label: "个人信息"
        //  children: new Array(4).fill(null).map((_, j) => {
        //    const subKey = 1 * 4 + j + 1;
        //    return {
        //      key: subKey,
        //      label: `option${subKey}`
        //    };
        //  })
    },
    {
        key: "sub2",
        icon: <CalendarOutlined />,
        label: "未来日程"
        //  children: new Array(4).fill(null).map((_, j) => {
        //    const subKey = 2 * 4 + j + 1;
        //    return {
        //      key: subKey,
        //      label: `option${subKey}`
        //    };
        //  })
    },
    // {
    //   key: "sub3",
    //   icon: <MessageOutlined />,
    //   label: "好友聊天"
    //   //  children: new Array(4).fill(null).map((_, j) => {
    //   //    const subKey = 3 * 4 + j + 1;
    //   //    return {
    //   //      key: subKey,
    //   //      label: `option${subKey}`
    //   //    };
    //   //  })
    // },
    {
        key: "sub4",
        icon: <NotificationOutlined />,
        label: "消息通知"
        //  children: new Array(4).fill(null).map((_, j) => {
        //    const subKey = 4 * 4 + j + 1;
        //    return {
        //      key: subKey,
        //      label: `option${subKey}`
        //    };
        //  })
    }
];

const MySider = () => {
    const {
        token: { colorBgContainer }
    } = theme.useToken();
    return (
        <Sider
            width={200}
            style={{
                background: colorBgContainer
            }}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                    height: "100%",
                    borderRight: 0
                }}
                items={items2}
            />
        </Sider>
    );
};
export default MySider;

