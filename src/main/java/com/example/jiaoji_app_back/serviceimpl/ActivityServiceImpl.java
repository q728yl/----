

package com.example.jiaoji_app_back.serviceimpl;

import com.example.jiaoji_app_back.dao.ActivityDao;
import com.example.jiaoji_app_back.entity.ActivityDetails;
import com.example.jiaoji_app_back.entity.ActivityRelease;
import com.example.jiaoji_app_back.entity.ActivityResponse;
import com.example.jiaoji_app_back.utils.msgutils.Message;
import com.example.jiaoji_app_back.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityDao activityDao;
    @Override
    public List<ActivityDetails> getActivityList() {
        return activityDao.getAllActivities();
    }
    @Override
    public List<ActivityResponse> getMyActivityList(int userId) {
        return activityDao.getMyActivities(userId);
    }
    @Override
    public Message getPassedActivity(){
        List<ActivityDetails> activityDetailsList= activityDao.getPassedActivity();
        if(activityDetailsList!= null){
            return new Message("获取活动列表成功",true,activityDetailsList);
        }else{
            return new Message("获取活动列表失败",false,null);
        }
    }
    @Override
    public Message changeStatus(Integer id, Integer status, String comments){
        ActivityDetails activityDetailsList= activityDao.changeStatus(id,status,comments);
        if(activityDetailsList!= null){
            return new Message("改变活动状态成功",true,activityDetailsList);
        }else{
            return new Message("改变活动状态失败",false,null);
        }
    }
    @Override
    public Message updateActivityRemainingNumber(Integer l,Integer remainingNumber){
        activityDao.updateActivityRemainingNumber(l,remainingNumber);

        return new Message("报名成功",true,null);

    }

    @Override
    public ActivityDetails getActivityById(Integer activityId){
        return activityDao.getActivityById(activityId);
    }
    @Override
    public Message release(String name, String content, String location, String signupTime, String activityTime, String departments, String signupRestriction, String college, Integer grade, String club, Integer recruitmentNumber, Integer remainingNumber, String organizer, Integer suScore, Integer laborHour, Integer status, String comments, String photo){
         activityDao.release(name,content,location,signupTime,activityTime,departments,signupRestriction,college,grade,club
        ,recruitmentNumber,remainingNumber,organizer,suScore,laborHour,status,comments,photo);

        return new Message("发布成功",true,null);
    }

    @Override
    public void addReleaseRecord(Integer userId,Integer num) {
        activityDao.addReleaseRecord(userId,num);

    }
    @Override
    public Long getActivityCount(){
        return activityDao.getActivityCount();
    }
    @Override
   public Message findMyRelease(Integer userId){
        List<ActivityRelease> activityDetailsList = activityDao.findMyRelease(userId);
        if(activityDetailsList!= null){
            return new Message("获取我发布的活动成功",true,activityDetailsList);
        }else{
            return new Message("获取我发布的活动",false,null);
        }
    }
}