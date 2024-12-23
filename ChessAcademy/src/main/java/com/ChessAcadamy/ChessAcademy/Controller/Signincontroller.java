package com.ChessAcadamy.ChessAcademy.Controller;
import java.time.Instant;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.nimbusds.jose.jwk.source.ImmutableSecret;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import com.ChessAcadamy.ChessAcademy.model.Signinmodel;
import com.ChessAcadamy.ChessAcademy.model.UserDetails;
import com.ChessAcadamy.ChessAcademy.Repository.SigninRepo;
import com.ChessAcadamy.ChessAcademy.Service.SigninService;
import com.ChessAcadamy.ChessAcademy.model.Loginfile;
import com.ChessAcadamy.ChessAcademy.model.Signfile;
@RestController
@RequestMapping("/api/users")
public class Signincontroller {
    @Autowired
    private SigninService ser;
    @Autowired
    private SigninRepo repo;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public Signincontroller(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@Valid @RequestBody Signfile registerDto, BindingResult result) {
        if (result.hasErrors()) {
            var errorsMap = new HashMap<String, String>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        var bCryptEncoder = new BCryptPasswordEncoder();
        Signinmodel userModel = new Signinmodel();
        userModel.setFirstname(registerDto.getFirstname());
        userModel.setLastname(registerDto.getLastname());
        userModel.setEmail(registerDto.getEmail());
       
        
        
       
        userModel.setPassword(bCryptEncoder.encode(registerDto.getPassword()));

        try {
           
            if (repo.findByEmail(registerDto.getEmail()) != null) {
                return ResponseEntity.badRequest().body("Email already exists");
            }

            repo.save(userModel);

            String jwtToken = createJwtToken(userModel);
            var response = new HashMap<String, Object>();
            response.put("token", jwtToken);
            response.put("user", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during registration");
        }
    }
    

    @GetMapping("/profile")
    public ResponseEntity<Object> profile(Authentication auth) {
        var response = new HashMap<String, Object>();
        response.put("Username", auth.getName());
        response.put("Authorities", auth.getAuthorities());

        var appUser = repo.findByFirstname(auth.getName());
        response.put("User", appUser);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@Valid @RequestBody Loginfile loginDto, BindingResult result) {
        if (result.hasErrors()) {
            var errorsMap = new HashMap<String, String>();
            for (FieldError error : result.getFieldErrors()) {
                errorsMap.put(error.getField(), error.getDefaultMessage());
            }
            return ResponseEntity.badRequest().body(errorsMap);
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword())
            );
            Signinmodel userModel = repo.findByEmail(loginDto.getEmail());

            String jwtToken = createJwtToken(userModel);
            var response = new HashMap<String, Object>();
            response.put("token", jwtToken);
            response.put("user", userModel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Bad username or password");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Signinmodel> getUserById(@PathVariable Long id) {
        return ser.getUserById(id)
                .map(user -> new ResponseEntity<>(user, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @Value("${security.jwt.secret-key}")
    private String jwtSecretKey;

    @Value("${security.jwt.issuer}")
    private String jwtIssuer;

    private String createJwtToken(Signinmodel userModel) {
        Instant now = Instant.now();

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer(jwtIssuer)
                .issuedAt(now)
                .expiresAt(now.plusSeconds(24 * 3600))
                .subject(userModel.getFirstname())
                // .claim("role", userModel.getRole())
                .build();

        var encoder = new NimbusJwtEncoder(new ImmutableSecret<>(jwtSecretKey.getBytes()));

        var params = JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(), claims);

        return encoder.encode(params).getTokenValue();
    }

    @GetMapping(path = "/getdata")
    public List<Signinmodel> getData() {
        return ser.gDetails();
    }

    @PatchMapping("/updateUserDetails")
    public Optional<Signinmodel> updateUserDetails(@RequestParam Long id, @RequestBody UserDetails userDetails) {
        return ser.updateUserDetails(id, userDetails.getAddress(), userDetails.getPhoneNumber());
    }
    
    @PatchMapping("/updateUserCourse")
    public Signinmodel patchUserCourses(@RequestParam Long User_id,@RequestParam Long Course_id )
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