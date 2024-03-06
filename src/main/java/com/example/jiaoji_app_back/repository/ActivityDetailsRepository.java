package com.example.jiaoji_app_back.repository;

import com.example.jiaoji_app_back.entity.ActivityDetails;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface ActivityDetailsRepository extends JpaRepository<ActivityDetails,Integer> {

    ActivityDetails findActivityDetailsById(Integer actId);
    List<ActivityDetails> findAll();

    List<ActivityDetails> findAllByStatusGreaterThanAndStatusLessThan(Integer startStatus, Integer endStatus);
    List<ActivityDetails> findByStatus(Integer Status);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO activity_details (name, content, location, signupTime, activityTime, departments, signupRestriction, college, grade, club, recruitmentNumber, remainingNumber, organizer, suScore, laborHour, status, comments,photo) " +
            "VALUES ( :name, :content, :location, :signupTime, :activityTime, :departments, :signupRestriction, :college, :grade, :club, :recruitmentNumber, :remainingNumber, :organizer, :suScore, :laborHour, :status, :comments,:photo)",
            nativeQuery = true)
    void insertRecord( @Param("name") String name, @Param("content") String content,
                      @Param("location") String location, @Param("signupTime") String signupTime,
                      @Param("activityTime") String activityTime, @Param("departments") String departments,
                      @Param("signupRestriction") String signupRestriction, @Param("college") String college,
                      @Param("grade") Integer grade, @Param("club") String club,
                      @Param("recruitmentNumber") Integer recruitmentNumber, @Param("remainingNumber") Integer remainingNumber,
                      @Param("organizer") String organizer, @Param("suScore") Integer suScore,
                      @Param("laborHour") Integer laborHour, @Param("status") Integer status,
                      @Param("comments") String comments,@Param("photo")String photo);


    @Modifying
    @Transactional
    @Query(value = "INSERT INTO activity_release (user_id,act_id) " +
            "VALUES ( :user_id, :act_id)",
            nativeQuery = true)
    void addReleaseRecord(@Param("user_id")Integer userId,@Param("act_id") Integer num);

  
    @Transactional
    @Query(value = "SELECT COUNT(*) FROM activity_details", nativeQuery = true)
    Long getActivityCount();
}

//    List<ActivityDetails> insertRecord(Long userId, String name, String content, String location, String signupTime, String activityTime, String departments, String signupRestriction, String college, String grade, String club, Long recruitmentNumber, Long remainingNumber, String organizer, Long suScore, Long laborHour, String status, String comments);
