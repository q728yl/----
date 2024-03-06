package com.example.jiaoji_app_back.controller;

import com.example.jiaoji_app_back.constant.Constant;
import com.example.jiaoji_app_back.entity.ActivityDetails;
import com.example.jiaoji_app_back.entity.User;
import com.example.jiaoji_app_back.service.ActivityService;
import com.example.jiaoji_app_back.service.SignUpService;
import com.example.jiaoji_app_back.service.UserService;
import com.example.jiaoji_app_back.utils.msgutils.Message;
import com.example.jiaoji_app_back.utils.msgutils.Msg;
import com.example.jiaoji_app_back.utils.msgutils.MsgCode;
import com.example.jiaoji_app_back.utils.msgutils.MsgUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Objects;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class SignUpController {

    @Autowired
    private SignUpService signUpService;
    @Autowired
    private UserService userService;
    @Autowired
    private ActivityService activityService;
    @PostMapping("/signup")
    public Message signup(@RequestBody Map<String,Object> params){
        Integer userId = Integer.valueOf(params.get("userId").toString());
        Integer actId = Integer.valueOf(params.get("actId").toString());
        String coll = null;
        Integer grade = null;
        String club = null;
        User user = userService.getUserByUserId(userId);
        ActivityDetails activity = activityService.getActivityById(actId);
        if(user!=null){
            coll = user.getCollege();
            grade = user.getGrade();
            club = user.getClub();

        }
        if(activity.getCollege() !=null){
            if(!Objects.equals(coll, activity.getCollege())){
                return new Message("学院不符合要求",false,null);
            }
        }
        if(activity.getClub() !=null){
            if(!Objects.equals(club, activity.getClub())){
                return new Message("社团不符合要求",false,null);
            }
        }
        if(activity.getGrade() !=-1){
            if(!Objects.equals(grade, activity.getGrade())){
                return new Message("年级不符合要求",false,null);
            }
        }


        if(signUpService.SignUp(userId,actId)){
            return new Message("报名成功",true,null);
        }else{
            return new Message("请勿重复报名",false,null);
        }
    }
}