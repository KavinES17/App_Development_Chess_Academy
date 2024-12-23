package com.ChessAcadamy.ChessAcademy.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ChessAcadamy.ChessAcademy.model.Signinmodel;
// import com.ChessAcadamy.ChessAcademy.model.UserDetails;

public interface SigninRepo extends JpaRepository<Signinmodel, Long> {
    public Signinmodel findByFirstname(String firstname);
    public Signinmodel findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<Signinmodel> findByEmailAndPassword(String email, String password);
     Optional<Signinmodel> findByEmailOptional(String email);
}