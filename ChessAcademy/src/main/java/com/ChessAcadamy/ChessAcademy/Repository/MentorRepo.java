package com.ChessAcadamy.ChessAcademy.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;

import com.ChessAcadamy.ChessAcademy.model.Mentor;


public interface MentorRepo extends JpaRepository<Mentor,Long> {
    Optional<Mentor> findByMentorId(Long id);
} 