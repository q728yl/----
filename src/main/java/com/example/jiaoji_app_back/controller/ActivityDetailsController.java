/*author: qyl*/
package com.example.jiaoji_app_back.controller;

import com.example.jiaoji_app_back.entity.ActivityDetails;
import com.example.jiaoji_app_back.entity.ActivityResponse;
import com.example.jiaoji_app_back.repository.ActivityDetailsRepository;
import com.example.jiaoji_app_back.service.ActivityService;
import com.example.jiaoji_app_back.utils.msgutils.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class ActivityDetailsController {
    @Autowired
    private ActivityService activityService;
    private final ActivityDetailsRepository activityDetailsRepository;
    @Autowired
    private LocalContainerEntityManagerFactoryBean entityManager;

    public ActivityDetailsController(ActivityDetailsRepository activityDetailsRepository) {
        this.activityDetailsRepository = activityDetailsRepository;
    }

    @RequestMapping("/activity")
    public ActivityDetails getActivityById(@RequestParam("id") Integer id) {
        return  activityService.getActivityById(id);
    }
    @RequestMapping("/activities")
    public List<ActivityDetails> getList(){
        return activityService.getActivityList();
    }

    @RequestMapping("/my_activities")
    public List<ActivityResponse> getMyActivities(@RequestParam("userId") int userId) {
        return activityService.getMyActivityList(userId);
    }


    @GetMapping("/getPassedActivities")
    public Message getPassedList2(){
        return activityService.getPassedActivity();
    }

    @PostMapping("/changeStatus")
    public Message changeStatus(@RequestBody Map<String,Object> body){
        Integer id = Integer.valueOf(body.get("id").toString());
        Integer status = Integer.valueOf(body.get("status").toString());
        String comments = (String) body.get("comments");
        return activityService.changeStatus(id, status,comments);
    }
//    @PostMapping("/handleSignup")
//    public Message handleSignup(@RequestBody Map<String,Object> body){
//        Long userId = Long.valueOf(body.get("userId").toString());
//        String college = (String) body.get("college");
//        String grade = (String) body.get("grade");
//        String club = (String) body.get("club");
//        Long activityId = Long.valueOf(body.get("activityId").toString());
//        ActivityDetails activityDetails = activityService.getPassedActivitiesByAId(activityId);
//        //剩余名额减一
//        if(activityDetails.getRemainingNumber()>0){
//
//            if(activityDetails.getCollege() !=null){
//                if(!Objects.equals(college, activityDetails.getCollege())){
//                    return new Message("学院不符合要求",false,null);
//                }
//            }
//            if(activityDetails.getClub() !=null){
//                if(!Objects.equals(club, activityDetails.getClub())){
//                    return new Message("社团不符合要求",false,null);
//                }
//            }
//            if(activityDetails.getGrade() !=null){
//                if(!Objects.equals(grade, activityDetails.getGrade())){
//                    return new Message("年级不符合要求",false,null);
//                }
//            }
//            activityDetails.setRemainingNumber(activityDetails.getRemainingNumber()-1);
//            Message message = activityService.updateActivityRemainingNumber(activityId,activityDetails.getRemainingNumber() -1);
//            System.out.println(message.getOk());
//            return new Message("报名成功",true,activityDetails);
//        }else
//            return new Message("报名失败",false,null);
//
//    }
@PostMapping("/release")
public Message release(@RequestBody Map<String,Object> body){
    Integer userId = Integer.valueOf(body.get("userId").toString());
    String name = (String) body.get("name");
    String content = (String) body.get("content");
    String location = (String) body.get("location");
    String signupTime = (String) body.get("signupTime");
    String activityTime = (String) body.get("activityTime");
    String departments = (String) body.get("departments");
    String signupRestriction = null;

    String college = (String) body.get("college");
    Integer grade =Integer.valueOf(body.get("grade").toString());
    String club = (String) body.get("club");
    Integer recruitmentNumber = Integer.valueOf(body.get("recruitmentNumber").toString());
    Integer remainingNumber = recruitmentNumber;
    String organizer = (String) body.get("organizer");
    Integer suScore = Integer.valueOf(body.get("suScore").toString());
    Integer laborHour = Integer.valueOf(body.get("laborHour").toString());
    Integer status = 1;
    String comments = null;
    String photo = "https://th.bing.com/th/id/R.785580b0aa9cce1c7e016db5ee2e078e?rik=ebpuQj03uKxGQg&riu=http%3a%2f%2fphotos.tuchong.com%2f255820%2ff%2f2852945.jpg&ehk=8sZ0LLnnaIXhdwT1M5Zk2xrfIMFcE%2bV45Nc1839Gj7Y%3d&risl=&pid=ImgRaw&r=0";

   //获取activity_details表行数


    Message message = activityService.release(name,content,location,signupTime,activityTime,departments,signupRestriction,college,grade,club,recruitmentNumber,remainingNumber,organizer,suScore,laborHour,status,comments,photo);
    Long rowCount = activityService.getActivityCount();
    activityService.addReleaseRecord(userId, Math.toIntExact(rowCount));
    return message;
}
@GetMapping("/my_release_activities")
public Message findMyRelease(@RequestParam("userId") Integer userId){
//        return new Message("ok",true,null);
//        Integer userId = 0;
        return activityService.findMyRelease(userId);
}

}