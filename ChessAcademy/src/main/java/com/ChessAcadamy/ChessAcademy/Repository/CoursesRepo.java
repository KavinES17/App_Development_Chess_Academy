package com.ChessAcadamy.ChessAcademy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ChessAcadamy.ChessAcademy.model.Courses;


public interface CoursesRepo extends JpaRepository<Courses,Long> {
    
}
