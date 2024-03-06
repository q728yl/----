package com.example.jiaoji_app_back.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "activity_release")
public class ActivityRelease {
    @Column(name = "user_id")
        private Integer userId;
    @Column(name = "act_id")
        private Integer actId;
        @Id
        @Column(name = "serial")
        private Integer serial;
}
