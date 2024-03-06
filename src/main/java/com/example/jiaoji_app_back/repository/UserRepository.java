package com.example.jiaoji_app_back.repository;

import com.example.jiaoji_app_back.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User findByUserId(Integer userId);
}