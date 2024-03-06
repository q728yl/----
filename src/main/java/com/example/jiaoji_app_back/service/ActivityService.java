package com.example.jiaoji_app_back.service;

import com.example.jiaoji_app_back.entity.ActivityDetails;
import com.example.jiaoji_app_back.entity.ActivityResponse;
import com.example.jiaoji_app_back.utils.msgutils.Message;

import java.util.List;

public interface ActivityService {
    public List<ActivityDetails> getActivityList();
    public List<ActivityResponse> getMyActivityList(int userId) ;
    public Message getPassedActivity();


    public ActivityDetails getActivityById(Integer activityId);

    Message changeStatus(Integer id, Integer status, String comments);

    Message updateActivityRemainingNumber(Integer l, Integer remainingNumber);

    public Message release(String name, String content, String location, String signupTime, String activityTime, String departments, String signupRestriction, String college, Integer grade, String club, Integer recruitmentNumber, Integer remainingNumber, String organizer, Integer suScore, Integer laborHour, Integer status, String comments, String photo);

    public void addReleaseRecord(Integer userId,Integer num);

    public Long getActivityCount();

    Message findMyRelease(Integer userId);
}