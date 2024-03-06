package com.example.jiaoji_app_back.controller;

import com.example.jiaoji_app_back.constant.Constant;
import com.example.jiaoji_app_back.entity.User;
import com.example.jiaoji_app_back.entity.UserAuth;
import com.example.jiaoji_app_back.service.UserService;
import com.example.jiaoji_app_back.utils.msgutils.Msg;
import com.example.jiaoji_app_back.utils.msgutils.MsgCode;
import com.example.jiaoji_app_back.utils.msgutils.MsgUtil;
import com.example.jiaoji_app_back.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//@ResponseStatus(HttpStatus.OK)
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping
    @RequestMapping("/login")
//    @ResponseStatus(HttpStatus.OK)
    //public Msg login(@RequestParam(Constant.USERNAME) String username, @RequestParam(Constant.PASSWORD) String password, @RequestParam(Constant.REMEMBER_ME) Boolean remember){
    public Msg login(@RequestBody Map<String, String> params){
        String username = params.get(Constant.USERNAME);
        String password = params.get(Constant.PASSWORD);
        UserAuth auth = userService.checkUser(username, password);

        if(auth != null){
            User user = userService.getUserByUserId(auth.getUserId());

            JSONObject obj = new JSONObject();
            obj.put(Constant.USER_ID, auth.getUserId());
            obj.put(Constant.USERNAME, auth.getUsername());
            obj.put(Constant.USER_TYPE, auth.getUserType());
            obj.put(Constant.AVATAR, user.getAvatar());
            obj.put(Constant.NICKNAME, user.getNickname());
            obj.put(Constant.GENDER, user.getGender());
            obj.put(Constant.EMAIL, user.getMail());
            obj.put(Constant.PHONE, user.getTel());
            obj.put(Constant.COLLEGE, user.getCollege());
            obj.put(Constant.STU_ID, user.getStudentId());
            obj.put(Constant.CLUB, user.getClub());
            obj.put(Constant.GRADE, user.getGrade());



            JSONObject data = JSONObject.fromObject(obj);

            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, data);
        }
        else{
            return MsgUtil.makeMsg(MsgCode.LOGIN_USER_ERROR);
        }
    }

    @RequestMapping("/logout")
    public Msg logout(){
        Boolean status = SessionUtil.removeSession();

        if(status){
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGOUT_SUCCESS_MSG);
        }
        return MsgUtil.makeMsg(MsgCode.ERROR, MsgUtil.LOGOUT_ERR_MSG);
    }


    @RequestMapping("/checkSession")
    public Msg checkSession(){
        JSONObject auth = SessionUtil.getAuth();

        if(auth == null){
            return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
        }
        else{
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, auth);
        }
    }
}