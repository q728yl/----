import {Button, Card, Layout} from 'antd';
import React, { useState } from 'react';
import MomentCard from "../Component/Moment/MomentCard";
import {Content, Header} from "antd/es/layout/layout";
import '../css/backgroud.css'
import { InboxOutlined, PlusOutlined} from "@ant-design/icons";
import PostMoment from "../Component/Moment/PostMoment";
import {getPostedMoment} from "../Services/MomentService";
import {getUser, getUserById} from "../Services/UserService";
import moment from "moment/moment";
import {getActivityByID} from "../Services/ActivitySevice";
const { Meta } = Card;

/**
 * @description: 朋友圈页面
 * 菜单栏右侧部分
 * 包含组件Header：两个按钮，发布、接收消息
 * 包含组件MomentCard：朋友圈卡片
 */
class MomentsView  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posters: [] , user: getUser()};

    }
    handlePostMoment = async () => {
        const fetchedPoster = await getPostedMoment();
        console.log("fetchedPoster",fetchedPoster)

        const posters = await Promise.all(
            fetchedPoster.map(async (value) => {
                const activity = await getActivityByID(value.actId);
                const user = await getUserById(value.userId);
                return {
                    ...value,
                    avatar: user.avatar,
                    nickname: user.nickname,
                    activityName: activity.name,
                };
            })
        );
        posters.sort((a, b) => {
            // 将时间字符串直接进行比较
            return b.postTime.localeCompare(a.postTime);
        });
        this.setState({posters: posters});

        console.log("posted",this.state.posters)
    };


    async componentDidMount() {
        // const userId = getUser().userId;
        const fetchedPoster = await getPostedMoment();

        const posters = await Promise.all(
            fetchedPoster.map(async (value) => {
                const activity = await getActivityByID(value.actId);
                const user = await getUserById(value.userId);
                return {
                    ...value,
                    avatar: user.avatar,
                    nickname: user.nickname,
                    activityName: activity.name,
                };
            })
        );
        posters.sort((a, b) => {
            // 将时间字符串直接进行比较
            return b.postTime.localeCompare(a.postTime);
        });
        this.setState({posters: posters});
    }
    render = () => {
        return (
            <Layout style={{
                width:"100%",
                background: "transparent",
                display: "flex",
                flex:1,
                alignItems: "center",
            }}>
                <Header style={{
                    padding: 10,
                    background: "rgba(255,255,255,0.5)",
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                >
                    {this.state.user && <PostMoment onPosted={this.handlePostMoment}/>}
                </Header>

                <Content
                    style={{
                        display: "flex",
                        flex:1,
                        alignItems: "center",
                    }}>
                    <div style={{
                        width: "100%",
                        alignItems: "center",
                    }}>
                        {this.state.posters.map((moment) => (
                            <MomentCard moment={moment} />
                        ))}
                    </div>
                </Content>
            </Layout>

    );
    }
};

export default MomentsView;