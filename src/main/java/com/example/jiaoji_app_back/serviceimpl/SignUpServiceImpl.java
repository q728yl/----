package com.example.jiaoji_app_back.serviceimpl;

import com.example.jiaoji_app_back.dao.SignupDao;
import com.example.jiaoji_app_back.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignUpServiceImpl implements SignUpService {
    @Autowired
    private SignupDao signupDao;
    @Override
    public boolean SignUp(Integer userID, Integer actId) {
//        if()
        return signupDao.SignUp(userID,actId);
    }
}