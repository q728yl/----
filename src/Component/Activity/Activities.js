import React, { useState, useEffect } from 'react';
const activities = [
    {
        id: 1,
        name: "迎新晚会",
        content: "欢迎新生入学的庆祝活动，有丰富的文艺表演和抽奖环节。",
        location: "学校体育馆",
        signupTime: "2023年8月1日 - 2023年8月20日",
        activityTime: "2023年9月1日晚上",
        departments: "全校开放",
        signupRestriction: "无",
        recruitmentNumber: 100,
        organizer: "学生会",
        suScore: 3,
        laborHour: 2
    },
    {
        id: 2,
        name: "篮球比赛",
        content: "校内篮球比赛，分为男子组和女子组，比赛采用半场制。",
        location: "学校体育馆",
        signupTime: "2023年9月1日 - 2023年9月15日",
        activityTime: "2023年10月1日",
        departments: "体育学院、计算机学院",
        signupRestriction: "必须为在校本科生",
        recruitmentNumber: 20,
        organizer: "体育学院",
        suScore: 2,
        laborHour: 3
    },
    {
        id: 3,
        name: "志愿者招募",
        content: "学校活动志愿者招募，志愿者将协助活动的策划、组织、执行和总结工作。",
        location: "学校各处",
        signupTime: "2023年8月1日 - 2023年9月1日",
        activityTime: "2023年9月10日 - 2023年9月30日",
        departments: "全校开放",
        signupRestriction: "无",
        recruitmentNumber: 50,
        organizer: "团委",
        suScore: 1,
        laborHour: 1
    },
    {
        id: 4,
        name: "越野跑比赛",
        content: "校内越野跑比赛，全程5公里，比赛地点在学校操场。",
        location: "学校操场",
        signupTime: "2023年10月1日 - 2023年10月15日",
        activityTime: "2023年11月1日",
        departments: "全校开放",
        signupRestriction: "必须为在校本科生",
        recruitmentNumber: 30,
        organizer: "体育学院",
        suScore: 2,
        laborHour: 3
    },
    {
        id: 5,
        name: "音乐会",
        content: "学校音乐会，包括独奏、合唱和乐队表演等多种形式，有精美礼品赠送。",
        location: "学校音乐厅",
        signupTime: "2023年11月1日 - 2023年11月30日",
        activityTime: "2023年12月15日",
        departments: "全校开放",
        signupRestriction: "无",
        recruitmentNumber: 200,
        organizer: "文艺学院",
        suScore: 3,
        laborHour: 2
    },
    {
        id: 6,
        name: "讲座",
        content: "校内知名人士讲座，主题为如何在大学里度过有意义的四年。",
        location: "学校报告厅",
        signupTime: "2023年9月15日 - 2023年10月1日",
        activityTime: "2023年10月10日下午",
        departments: "全校开放",
        signupRestriction: "无",
        recruitmentNumber: 500,
        organizer: "学生会",
        suScore: 2,
        laborHour: 1
    }
];

export default activities;