package com.ChessAcadamy.ChessAcademy.model;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Loginfile {
    private String email;
    private String password;
    
}
