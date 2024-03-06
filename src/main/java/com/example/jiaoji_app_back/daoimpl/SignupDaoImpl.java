package com.example.jiaoji_app_back.daoimpl;

import com.example.jiaoji_app_back.dao.SignupDao;
import com.example.jiaoji_app_back.entity.ActivitySignup;
import com.example.jiaoji_app_back.repository.SignupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class SignupDaoImpl implements SignupDao {
    @Autowired
    private SignupRepository signupRepository;
    @Override
    public boolean SignUp(Integer userId, Integer actId) {
        if(signupRepository.existsActivitySignupByUserIdAndActId(userId,actId)){
            return false;
        }

        signupRepository.save(new ActivitySignup(userId,actId,1,-1,null));
        return true;
    }

}