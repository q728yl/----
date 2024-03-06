/*author: qyl*/
package com.example.jiaoji_app_back.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

@Table(name ="activity_details")
public class ActivityDetails {
    public enum Status {
        REJECTED,
        NOT_RELEASE,
        TODO,
        PASS,
        SIGN,
        PROCESS,
        OVER;
    }


    @Id
    private Integer id;
    private String name;
    private String content;
    private String location;
    private String signupTime;
    private String activityTime;
    private String departments;
    private String signupRestriction;
    private String college;
    private Integer grade;
    private String club;
    private Integer recruitmentNumber;
    private Integer remainingNumber;
    private String organizer;
    private Integer suScore;
    private Integer laborHour;
    private Integer status;
    private String comments;
    private String photo;




}