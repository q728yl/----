package com.example.jiaoji_app_back.daoimpl;

import com.example.jiaoji_app_back.dao.ActivityDao;
import com.example.jiaoji_app_back.entity.ActivityDetails;
import com.example.jiaoji_app_back.entity.ActivityRelease;
import com.example.jiaoji_app_back.entity.ActivityResponse;
import com.example.jiaoji_app_back.entity.ActivitySignup;
import com.example.jiaoji_app_back.repository.ActivityDetailsRepository;
import com.example.jiaoji_app_back.repository.ReleaseRepository;
import com.example.jiaoji_app_back.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ActivityDaoImpl implements ActivityDao {
    @Autowired
    private ActivityDetailsRepository activityDetailsRepository;
    @Autowired
    private SignupRepository signupRepository;
    @Autowired
    private ReleaseRepository releaseRepository;
    @Override
    public List<ActivityDetails> getAllActivities() {
//        return activityDetailsRepository.findAllByStatusGreaterThanAndStatusLessThan(ActivityDetails.Status.TODO, ActivityDetails.Status.OVER);
        return activityDetailsRepository.findAll();
    }
    @Override
    public List<ActivityResponse> getMyActivities(Integer userId) {
        List<ActivitySignup> activitySignups = signupRepository.findActivityByUserId(userId);
        List<ActivityResponse> activityResponses = new ArrayList<>();

        for (ActivitySignup activitySignup : activitySignups) {

            Integer activityId = (Integer) activitySignup.getActId();
            ActivityDetails activityDetails = activityDetailsRepository.findActivityDetailsById(activityId);
            activityResponses.add(new ActivityResponse(activitySignup.getUserId(),
                    activitySignup.getActId(),
                    activitySignup.getState(),
                    activitySignup.getComment(),
                    activitySignup.getCommentDetail(),
                    activityDetails.getName(),
                    activityDetails.getActivityTime()
                    ));
//                    activityDetails.getPhoto()));

        }
        return activityResponses;
    }

    @Override
    public  List<ActivityDetails> getPassedActivity(){
        return activityDetailsRepository.findAllByStatusGreaterThanAndStatusLessThan(1,5);

    }
    @Override
    public  ActivityDetails changeStatus(Integer id, Integer status, String comments){
        ActivityDetails activityDetails = activityDetailsRepository.findActivityDetailsById(id);
        activityDetails.setStatus(status);
        activityDetails.setComments(comments);
        activityDetailsRepository.save(activityDetails);
        return activityDetails;
    }


    @Override
    public  void updateActivityRemainingNumber(Integer activityId,Integer remainingNumber){
//        Optional<ActivityDetails> activityDetails = activityDetailsRepository.findById(activityId);
//
//        activityDetails.setRemainingNumber(remainingNumber);
//        activityDetailsRepository.save(activityDetails);
    }

    @Override
    public ActivityDetails getActivityById(Integer activityId){
        return activityDetailsRepository.findActivityDetailsById(activityId);
    }
    @Override
    public void release(String name, String content, String location, String signupTime, String activityTime, String departments, String signupRestriction, String college, Integer grade, String club, Integer recruitmentNumber, Integer remainingNumber, String organizer, Integer suScore, Integer laborHour, Integer status, String comments, String photo){
         activityDetailsRepository.insertRecord(name,content, location, signupTime, activityTime, departments, signupRestriction,  college, grade,club, recruitmentNumber, remainingNumber,  organizer, suScore, laborHour,  status, comments,photo);
    }
    @Override
    public void  addReleaseRecord(Integer userId, Integer num){
        activityDetailsRepository.addReleaseRecord(userId,num);
    }
    @Override
    public Long getActivityCount(){
        return activityDetailsRepository.getActivityCount();
    }
   @Override
    public List<ActivityRelease> findMyRelease(Integer userId){
        return releaseRepository.findActivityReleaseByUserId(userId);
   }
}