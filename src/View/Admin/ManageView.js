import React from "react";
import { Table, Space, List } from "antd";
import { Link } from "react-router-dom";
import AdminActivity from "../../Component/Admin/AdminActivity";
import { getAllActivities } from "../../Services/ActivitySevice";
import { useEffect, useState } from "react";
import {STATUS} from "../../utils/Constant";

/**
 * 管理活动页面
 * 管理员可以在此页面查看所有活动
 * 被AdminHomeView.js调用
 * edit by yhx 0513
 */


class ManageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        };
    }

    async componentDidMount() {
        const fetchedActivities = await getAllActivities();
        this.setState({activities: fetchedActivities});
        console.log("fetchAll",this.state.activities)
    }

    render() {
        return (
            <div>
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={this.state.activities.filter((activity) => activity.status === STATUS.TODO)}
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

export default ManageView;