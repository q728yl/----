import React from 'react';
import { Avatar, List, Card } from 'antd';
import { Link } from "react-router-dom";

const activities = [
    {
        id: 1,
        title: '活动1',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1',
        description: 'A workshop on React basics and best practices',
        date: '2022-01-15',
    },
    {
        id: 2,
        title: '活动2',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
        description: 'A 24-hour hackathon for students and professionals',
        date: '2022-02-12',
    },
    {
        id: 3,
        title: '活动3',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=3',
        description: 'An evening of networking with industry leaders',
        date: '2022-03-05',
    },
    {
        id: 4,
        title: '活动4',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=4',
        description: 'A panel discussion on the future of technology',
        date: '2022-04-08',
    },
    {
        id: 5,
        title: '活动5',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=5',
        description: 'A panel discussion on the future of technology',
        date: '2022-04-08',
    },
    {
        id: 6,
        title: '活动6',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=6',
        description: 'A panel discussion on the future of technology',
        date: '2022-04-08',
    },
];

const ActivityList = () => (
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={activities}
        renderItem={(activity) => (
            <List.Item>
                <Link to={`/activity/${activity.id}`}>
                    <Card
                        cover={<img alt="example" src={activity.avatarUrl} />}
                        title={activity.title}
                    >
                        <Card.Meta description={activity.description} />
                        报名截止日期：{activity.date}
                    </Card>
                </Link>
            </List.Item>
        )}
    />
);

export default ActivityList;
