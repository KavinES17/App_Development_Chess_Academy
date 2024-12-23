package com.ChessAcadamy.ChessAcademy.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.ChessAcadamy.ChessAcademy.Repository.MentorRepo;
import com.ChessAcadamy.ChessAcademy.model.Mentor;

@RestController
@RequestMapping("/mentor")
public class MentorController {
    @Autowired
    private MentorRepo repo;


    @PostMapping("/postmentor")
    public Mentor postMentors(@RequestBody Mentor mentor)
    {
        return repo.save(mentor);
    }
    @GetMapping("/getmentordet")
    public List <Mentor> getmentors()
    {
        return repo.findAll();
    }

    @DeleteMapping("/deletementor")
    public void delMentor(@RequestParam Long mentorID)
    {
        repo.deleteById(mentorID);
    }
}
