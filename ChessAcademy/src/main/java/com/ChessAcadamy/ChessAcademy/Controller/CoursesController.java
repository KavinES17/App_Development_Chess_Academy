package com.ChessAcadamy.ChessAcademy.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ChessAcadamy.ChessAcademy.Service.Coursesservice;
import com.ChessAcadamy.ChessAcademy.model.Courses;

@RestController
@RequestMapping("/courses")
public class CoursesController {
    @Autowired
    Coursesservice ser;

    @PostMapping(path = "/insertCourses")
    public List<Courses> saveCoursesData(@RequestBody List<Courses> details) {
        return ser.saveCoursesData(details);
    }

    @GetMapping(path = "/getCoursesdata")
    public List<Courses> getCoursesData() {
        return ser.gCoursesDetails();
    }
    @DeleteMapping(path = "/deleteCourses")
    public List<Courses> deletCoursesDetails(@RequestParam Long id)
    {
        return ser.gdeleCoursesDetails(id);
    }

    @PatchMapping("/addmentor")
    public Courses patchCourses(@RequestParam Long Courses_id,@RequestParam Long Mentor_id )
    {
        return ser.patchingCourses(Courses_id,Mentor_id );
    }

    @PatchMapping("/editcoursedetails")
    public Courses patchCoursedet(@RequestParam Long Couses_id,@RequestBody Courses courses)
    {
        return ser.patchCourseDetails(Couses_id, courses);
    }

}
