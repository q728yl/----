import {
    WechatOutlined, MenuFoldOutlined, MenuUnfoldOutlined, SmileOutlined, UserOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useState } from 'react';
import MomentsView from "./MomentsView";
import ChatView from "./ChatView";
import InfoView from "./InfoView";
const items = [
    {
        label: '聊天',
        key: 'chat',
        icon: <WechatOutlined />,
    },
    {
        label: '朋友圈',
        key: 'moments',
        icon: <SmileOutlined />,
    },
    {
        label: '个人信息',
        key: 'info',
        icon: <UserOutlined />,
    }
];

/**
 * @description: 个人页面
 * 左侧菜单栏+右侧内容
 * 页面跳转已完成
 * 包含组件MomentCard：朋友圈卡片
 * 包含组件ChatCard：聊天卡片
 * 包含组件InfoCard：个人信息卡片
 */
const PersonView = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('');

    const handleMenuClick = (event) => {
        setSelectedMenuItem(event.key);
    };
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    let content;

    // 页面跳转逻辑
    switch (selectedMenuItem) {
        case 'moments':
            content = <MomentsView />;
            break;
        case 'chat':
            content = <ChatView />;
            break;
        default:
            content = <InfoView />;
    }

    return (
        <div style={{display:'flex',flex:1,width:'100%'}} >
            <div
                style={{
                    width: 150,
                    marginTop: 10,
                    marginLeft: 10,
                }}
            >
                <Button
                    type="default"
                    onClick={toggleCollapsed}
                    style={{
                        marginBottom: 16,
                        backgroundColor:'transparent',
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                    style={{backgroundColor:'transparent'}}
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={handleMenuClick}
                />
            </div>
            <div
                style={{flex:1,
                    alignItems:"center",
                    width:"100%",
                    display:"flex",
                    flexDirection:"column" }}
            >
                {content}
            </div>
        </div>

    );
};
export default PersonView;