package com.example.jiaoji_app_back.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.*;


import lombok.Data;
import java.util.Objects;

@Entity
@Data
@Table(name = "activity_signup", schema = "jiaoji")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class ActivitySignup {

//    public enum StateEnum {
//        SIGNED,  1
//        PASSED,  2
//        REJECTED, 3
//        PARTICIPATED, 4
//        COMMENTED 5
//    }

    @Id
    @Column(name = "serial")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int serial;
    @Basic
    @Column(name = "user_id")
    private int userId;

    @Basic
    @Column(name = "act_id")
    private int actId;
    @Basic
    @Column(name = "state")
    private int state;
    @Basic
    @Column(name = "comment")
    private Integer comment;
    @Basic
    @Column(name = "comment_detail")
    private String commentDetail;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getActId() {
        return actId;
    }

    public void setActId(int actId) {
        this.actId = actId;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Integer getComment() {
        return comment;
    }

    public void setComment(Integer comment) {
        this.comment = comment;
    }

    public String getCommentDetail() {
        return commentDetail;
    }

    public void setCommentDetail(String commentDetail) {
        this.commentDetail = commentDetail;
    }

    //    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        ActivitySignup that = (ActivitySignup) o;
//        return userId == that.userId && actId == that.actId && Objects.equals(state, that.state) && Objects.equals(comment, that.comment) && Objects.equals(commentDetail, that.commentDetail);
//    }
    public ActivitySignup(Integer userId, Integer actId, int signed, Integer i, String o) {
        this.userId = userId;
        this.actId = actId;
        this.state = signed;
        this.comment = i;
        this.commentDetail = o;
    }

    public ActivitySignup() {

    }
//    @Override
//    public int hashCode() {
//        return Objects.hash(userId, actId, state, comment, commentDetail);
//    }
}