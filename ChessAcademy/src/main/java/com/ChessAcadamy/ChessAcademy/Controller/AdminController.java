package com.ChessAcadamy.ChessAcademy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ChessAcadamy.ChessAcademy.Service.AdminService;
import com.ChessAcadamy.ChessAcademy.model.Admin;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService ser;

    @PostMapping("/postadmin")
    public List<Admin> postAdmin(@RequestBody List<Admin> det) {
        return ser.postAdmin(det);
    }

    @GetMapping("/admindata")
    public List<Admin> getAdmin() {
        return ser.getAdmin();
    }
}
