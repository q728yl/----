import React from "react";
import { Table, Space, List } from "antd";
import { Link } from "react-router-dom";
import AdminActivity from "../../Component/Admin/AdminActivity";
import { getAllActivities } from "../../Services/ActivitySevice";
import { useEffect, useState } from "react";
import {STATUS} from "../../utils/Constant";

/**
 * 活动历史页面
 * 管理员可以在此页面查看所有审核过的活动
 * 被AdminHomeView.js调用
 * edit by yhx 0513
 */

class AdminHistoryView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        };
    }

    async componentDidMount() {
        const fetchedActivities = await getAllActivities();
        this.setState({activities: fetchedActivities});
        console.log(this.state.activities)
    }

    render() {
        return (
            <div>
                <h1>已通过</h1>
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={this.state.activities.filter((activity) => activity.status === STATUS.PASS)}
                    renderItem={(activity) => (
                        <List.Item>
                            <AdminActivity activity={activity} />
                        </List.Item>
                    )}
                />
                <h1>已驳回</h1>
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={this.state.activities.filter((activity) => activity.status === STATUS.REJECTED)}
                    renderItem={(activity) => (
                        <List.Item>
                            <AdminActivity activity={activity} />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default AdminHistoryView;