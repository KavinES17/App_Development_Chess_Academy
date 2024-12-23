package com.ChessAcadamy.ChessAcademy.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    private String firstName;
    private String lastName;
    private String email;
    private String date;
    private String pass;
    private String address;
    private String phoneNumber;

    // @JsonManagedReference
    @ManyToMany(cascade = CascadeType.ALL)
    private List<Courses> courses;

     @ElementCollection
    private Map<Long, LocalDateTime> courseAssignmentTime = new HashMap<>();
   
}
