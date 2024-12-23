package com.ChessAcadamy.ChessAcademy.Repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Modifying;
// import org.springframework.data.jpa.repository.Query;


import com.ChessAcadamy.ChessAcademy.model.UserDetails;


public interface UserRepo extends JpaRepository<UserDetails, Long> {
    Optional<UserDetails> findByEmail(String email);
}
