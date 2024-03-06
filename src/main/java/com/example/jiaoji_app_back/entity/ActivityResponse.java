package com.example.jiaoji_app_back.entity;

import lombok.Data;


/*
 * @brief: 这个类不对应表格，用来返回“我的活动”的信息
 * 选取了ActivityDetails和ActivitySignUp中的部分字段
 * */
@Data
public class ActivityResponse {

    private int userId;
    private int actId;
    private int state;
    private int comment;
    private String commentDetail;
    private String name;
    private String activityTime;
//    private String photo;


    public ActivityResponse(int userId, int actId, int state, int comment, String comments1, String name, String activityTime) {
        this.userId = userId;
        this.actId = actId;
        this.state = state;
        this.comment = comment;
        this.commentDetail = comments1;
        this.name = name;
        this.activityTime = activityTime;
//        this.photo = photo;
    }

}