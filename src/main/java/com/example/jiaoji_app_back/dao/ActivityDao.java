package com.example.jiaoji_app_back.dao;

import com.example.jiaoji_app_back.entity.ActivityDetails;
import com.example.jiaoji_app_back.entity.ActivityRelease;
import com.example.jiaoji_app_back.entity.ActivityResponse;

import java.util.List;

public interface ActivityDao {

         List<ActivityDetails> getAllActivities();

        List<ActivityResponse> getMyActivities(Integer userId) ;

        List<ActivityDetails> getPassedActivity();

        ActivityDetails changeStatus(Integer id, Integer status, String comments);

        void updateActivityRemainingNumber(Integer activityId,Integer remainingNumber);

        ActivityDetails getActivityById(Integer activityId);

        void release(String name, String content, String location, String signupTime, String activityTime, String departments, String signupRestriction, String college, Integer grade, String club, Integer recruitmentNumber, Integer remainingNumber, String organizer, Integer suScore, Integer laborHour, Integer status, String comments,String photo);

        void addReleaseRecord(Integer userId, Integer num);

        Long getActivityCount();

        List<ActivityRelease> findMyRelease(Integer userId);
}