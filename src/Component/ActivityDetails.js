import React from "react";
import { Card as AntCard } from "antd";
import "../css/ActivityDetail.css";
// import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap';

const ActivityDetails = ({ activity }) => {
    return (
        <div className="card-container">

            <AntCard className="activity-card ant-card-hoverable">
                <div className="ant-card-head">
                    <h2 className="ant-card-head-title">{activity && activity.name}</h2>
                </div>
                <div className="ant-card-body">
                    <p>{activity && activity.content}</p>
                    {
                        activity
                        &&
                        <ul>
                            <li>地点：{activity.location}</li>
                            <li>报名时间：{activity.signupTime}</li>
                            <li>活动时间：{activity.activityTime}</li>
                            <li>开设学院：{activity.departments}</li>
                            <li>报名限制：</li>
                            <li>学院限制：{activity.college || '无'}</li>
                            <li>年级限制：{activity.grade || '无'}</li>
                            <li>社团限制：{activity.club || '无'}</li>
                            <li>招募人数：{activity.recruitmentNumber}</li>
                            <li>剩余名额：{activity.remainingNumber}</li>
                            <li>主办单位：{activity.organizer}</li>
                            <li>素拓奖励：{activity.suScore} 分</li>
                            <li>劳动教育学时：{activity.laborHour} 时</li>
                        </ul>
                    }

                </div>
            </AntCard>
        </div>
    );
};

export default ActivityDetails;
