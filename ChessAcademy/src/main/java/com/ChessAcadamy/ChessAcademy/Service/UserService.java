package com.ChessAcadamy.ChessAcademy.Service;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import com.ChessAcadamy.ChessAcademy.Repository.CoursesRepo;
import com.ChessAcadamy.ChessAcademy.Repository.UserRepo;
import com.ChessAcadamy.ChessAcademy.model.Courses;
import com.ChessAcadamy.ChessAcademy.model.Mentor;
// import com.ChessAcadamy.ChessAcademy.model.Courses;
import com.ChessAcadamy.ChessAcademy.model.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
public class UserService {
    @Autowired
    UserRepo repo;
    @Autowired
    CoursesRepo Crepo;

    public List<UserDetails> saveData(List<UserDetails> users) {
        repo.saveAll(users);
        return repo.findAll();
    }

    public List<UserDetails> gDetails() {
        return repo.findAll();
    }

    public List<UserDetails> gdeleUserDetails(Long id) {
        repo.deleteById(id);
        return repo.findAll();
    }

    public Optional<UserDetails> updateUserDetails(Long id, String address, String phoneNumber) {
        Optional<UserDetails> userDetailsOptional = repo.findById(id);
        if (userDetailsOptional.isPresent()) {
            UserDetails userDetails = userDetailsOptional.get();
            if (address != null) {
                userDetails.setAddress(address);
            }
            if (phoneNumber != null) {
                userDetails.setPhoneNumber(phoneNumber);
            }
            repo.save(userDetails);
        }
        return userDetailsOptional;
    }
    public UserDetails patchingUser(Long userId, Long courseId) {
        Optional<UserDetails> existingUserOpt = repo.findById(userId);
        Optional<Courses> existingCoursesOpt = Crepo.findById(courseId);
    
        if (existingCoursesOpt.isPresent() && existingUserOpt.isPresent()) {
            Courses existingCourse = existingCoursesOpt.get();
            UserDetails existingUser = existingUserOpt.get();
    
            List<Courses> existingCourses = existingUser.getCourses();
    
            if (existingCourses.size() < 3) { // Ensure that there are fewer than 3 courses
                existingCourses.add(existingCourse); // Add the course to the user's course list
                existingUser.getCourseAssignmentTime().put(courseId, LocalDateTime.now()); // Add assignment time
                existingUser.setCourses(existingCourses); // Update the user's course list
                return repo.save(existingUser); // Save and return the updated user
            } else {
                throw new IllegalStateException("Cannot add more than 3 courses to a user.");
            }
        } else {
            throw new NoSuchElementException("User or Course not found with the given IDs.");
        }
    }
    
    public void deleteUser (long id)
    {
        UserDetails user=repo.findById(id).get();
        user.setCourses(new ArrayList<Courses>());
        repo.save(user);
        repo.deleteById(id);
    }

    public UserDetails deleteUserCourses(Long userId, Long courseId) {
        Optional<UserDetails> existingUserOpt = repo.findById(userId);
        Optional<Courses> existingCoursesOpt = Crepo.findById(courseId);
    
        if (existingCoursesOpt.isPresent() && existingUserOpt.isPresent()) {
            Courses existingCourse = existingCoursesOpt.get();
            UserDetails existingUser = existingUserOpt.get();
    
            List<Courses> existingCourses = existingUser.getCourses();
    
            if (existingCourses.contains(existingCourse)) { // Ensure that there are fewer than 3 courses
                existingCourses.remove(existingCourse); // remove the course to the user's course list
                existingUser.setCourses(existingCourses); // Update the user's course list
                return repo.save(existingUser); // Save and return the updated user
            } else {
                throw new IllegalStateException("Course not found in the user's course list.");
            }
        } else {
            throw new NoSuchElementException("User or Course not found with the given IDs.");
        }
    }
    @Scheduled(fixedRate = 3600000) // Runs every hour
    public void removeExpiredCourses() {
        List<UserDetails> allUsers = repo.findAll();
        for (UserDetails user : allUsers) {
            List<Courses> userCourses = user.getCourses();
            Map<Long, LocalDateTime> assignmentTimes = user.getCourseAssignmentTime();

            List<Courses> coursesToRemove = new ArrayList<>();
            for (Courses course : userCourses) {
                Long courseId = course.getCourseId();
                LocalDateTime assignmentTime = assignmentTimes.get(courseId);
                int durationDays = course.getDurationDays(); // Get duration from course entity

                if (assignmentTime != null && assignmentTime.plusDays(durationDays).isBefore(LocalDateTime.now())) {
                    // If the course duration has expired
                    coursesToRemove.add(course);
                }
            }

            if (!coursesToRemove.isEmpty()) {
                userCourses.removeAll(coursesToRemove);
                for (Courses course : coursesToRemove) {
                    Long courseId = course.getCourseId();
                    assignmentTimes.remove(courseId);
                }
                user.setCourses(userCourses);
                repo.save(user); // Save the updated user
            }
        }
    }
}
