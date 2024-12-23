package com.ChessAcadamy.ChessAcademy.model;

import java.util.List;

// import com.fasterxml.jackson.annotation.JsonBackReference;
// import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Courses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long courseId;
    private String title;
    private String description; 
    private String img;
    private String content;
    private int durationDays; // Duration in days



    @ManyToMany(cascade = CascadeType.ALL)
    private List<Mentor> mentor;

    public void setCourses(Courses existingCourses) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setCourses'");
    }

}
