package com.ChessAcadamy.ChessAcademy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ChessAcadamy.ChessAcademy.Service.UserService;
// import com.ChessAcadamy.ChessAcademy.model.Courses;
import com.ChessAcadamy.ChessAcademy.model.UserDetails;
// import org.springframework.http.MediaType;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")

public class UserController {
    @Autowired
    UserService ser;

    @PostMapping(path = "/insert")
    public List<UserDetails> saveData(@RequestBody List<UserDetails> details) {
        return ser.saveData(details);
    }

    @GetMapping(path = "/getdata")
    public List<UserDetails> getData() {
        return ser.gDetails();
    }

    @PatchMapping("/updateUserDetails")
    public Optional<UserDetails> updateUserDetails(@RequestParam Long id, @RequestBody UserDetails userDetails) {
        return ser.updateUserDetails(id, userDetails.getAddress(), userDetails.getPhoneNumber());
    }

    @PatchMapping("/updateUserCourse")
    public UserDetails patchUserCourses(@RequestParam Long User_id,@RequestParam Long Course_id )
    {
        return ser.patchingUser(User_id,Course_id );
    }
    @DeleteMapping(path = "/deleteuser")
    public void deleUserDetails(@RequestParam Long id)
    {
        ser.deleteUser(id);
    }
    
    @DeleteMapping(path = "/deleteusercourses")
    public void deleUserCourses(@RequestParam Long userId,@RequestParam Long coursesId)
    {
       ser.deleteUserCourses(userId,coursesId);
    }
}
