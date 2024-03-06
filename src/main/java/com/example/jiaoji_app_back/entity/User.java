package com.example.jiaoji_app_back.entity;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import lombok.Data;
import java.util.Objects;

@Entity
@Table(name = "user")
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userId")
    private int userId;
    @Basic
    @Column(name = "nickname")
    private String nickname;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "gender")
    private Integer gender;
    @Basic
    @Column(name = "tel")
    private String tel;
    @Basic
    @Column(name = "avatar")
    private String avatar;
    @Basic
    @Column(name = "college")
    private String college;
    @Basic
    @Column(name = "studentId")
    private String studentId;
    @Basic
    @Column(name = "club")
    private String club;
    @Basic
    @Column(name = "mail")
    private String mail;
    @Basic
    @Column(name = "grade")
    private Integer grade;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return userId == user.userId && Objects.equals(nickname, user.nickname) && Objects.equals(username, user.username) && Objects.equals(gender, user.gender) && Objects.equals(tel, user.tel) && Objects.equals(avatar, user.avatar) && Objects.equals(college, user.college) && Objects.equals(studentId, user.studentId) && Objects.equals(club, user.club) && Objects.equals(mail, user.mail) && Objects.equals(grade, user.grade);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, nickname, username, gender, tel, avatar, college, studentId, club, mail, grade);
    }
}