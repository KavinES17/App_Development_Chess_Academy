package com.ChessAcadamy.ChessAcademy.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ChessAcadamy.ChessAcademy.Repository.CoursesRepo;
import com.ChessAcadamy.ChessAcademy.Repository.MentorRepo;
import com.ChessAcadamy.ChessAcademy.model.Courses;
import com.ChessAcadamy.ChessAcademy.model.Mentor;


@Service
public class Coursesservice {
    @Autowired
    CoursesRepo repo;
    @Autowired
    MentorRepo mRepo;

    public List<Courses> saveCoursesData(List<Courses> details) {
        repo.saveAll(details);
        return repo.findAll();
    }

    public List<Courses> gCoursesDetails() {
        return repo.findAll();
    }
    public List<Courses> gdeleCoursesDetails(Long id)
    {
        repo.deleteById(id);
        return repo.findAll();
    }
    
    public Courses patchingCourses(Long courseId, Long mentorId) {
        Optional<Courses> existingCoursesOpt = repo.findById(courseId);
        Optional<Mentor> existingMentorOpt = mRepo.findByMentorId(mentorId);
    
        if (existingCoursesOpt.isPresent() && existingMentorOpt.isPresent()) {
            Courses existingCourses = existingCoursesOpt.get();
            Mentor existingMentor = existingMentorOpt.get();
    
            List<Mentor> existingMentors = existingCourses.getMentor();
    
            if (existingMentors.size() <= 1) { // Ensure that there are fewer than 3 mentors
                existingMentors.removeAll(existingMentors);
                existingMentors.add(existingMentor); // Add the mentor to the list
                existingCourses.setMentor(existingMentors); // Update the mentor list
                return repo.save(existingCourses); // Save and return the updated course
            } else {
                throw new IllegalStateException("Cannot add more than 1 mentors to a course.");
            }
        } else {
            throw new NoSuchElementException("Course or Mentor not found with the given IDs.");
        }
    }


    public Courses patchCourseDetails(Long courseId, Courses updatedCourseDetails) {
        Optional<Courses> existingCourseOpt = repo.findById(courseId);

        if (existingCourseOpt.isPresent()) {
            Courses existingCourse = existingCourseOpt.get();

            // Update the fields that are provided in the updatedCourseDetails
            if (updatedCourseDetails.getTitle() != null) {
                existingCourse.setTitle(updatedCourseDetails.getTitle());
            }
            if (updatedCourseDetails.getDescription() != null) {
                existingCourse.setDescription(updatedCourseDetails.getDescription());
            }
            if (updatedCourseDetails.getImg() != null) {
                existingCourse.setImg(updatedCourseDetails.getImg());
            }
            if (updatedCourseDetails.getContent() != null) {
                existingCourse.setContent(updatedCourseDetails.getContent());
            }
            if (updatedCourseDetails.getMentor() != null && !updatedCourseDetails.getMentor().isEmpty()) {
                existingCourse.setMentor(updatedCourseDetails.getMentor());
            }

            // Save and return the updated course
            return repo.save(existingCourse);
        } else {
            throw new NoSuchElementException("Course not found with ID: " + courseId);
        }
    }
}
