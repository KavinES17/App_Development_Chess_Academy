package com.ChessAcadamy.ChessAcademy.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ChessAcadamy.ChessAcademy.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Long> {
}
