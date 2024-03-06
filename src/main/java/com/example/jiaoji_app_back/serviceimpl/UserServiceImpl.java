package com.example.jiaoji_app_back.serviceimpl;

import com.example.jiaoji_app_back.dao.UserDao;
import com.example.jiaoji_app_back.entity.User;
import com.example.jiaoji_app_back.entity.UserAuth;
import com.example.jiaoji_app_back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserAuth checkUser(String username, String password){
        return userDao.checkUser(username,password);
    }

    @Override
    public User getUserByUserId(Integer userId) {
        return userDao.getUserByUserId(userId);
    }
}