package com.ChessAcadamy.ChessAcademy.Config;

import java.util.List;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ChessAcadamy.ChessAcademy.Service.SigninService;

@Configuration
@EnableWebSecurity
public class WebConfig implements WebMvcConfigurer {

    @Value("${security.jwt.secret-key}")
    private String jwtSecretKey;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        return http
                .csrf(csrf -> csrf.disable())
                //only the mentioned endpoints can be authorized
                .authorizeHttpRequests(auth -> auth
                            .requestMatchers("/").permitAll()
                            .requestMatchers("/api/users/**").permitAll()
                            .requestMatchers("/store/**").permitAll()
                            .requestMatchers("/account/*").permitAll()
                            .requestMatchers("/admin/*").permitAll()
                            .requestMatchers("/api/events/**").permitAll()
                            .anyRequest().authenticated()
                )
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))
                .sessionManagement(session -> session.sessionCreationPolicy(
                        SessionCreationPolicy.STATELESS
                ))
                
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Enable CORS configuration
                .build();
    }
    
    @Bean
    public JwtDecoder jwtDecoder(){
        var secretKey = new SecretKeySpec(jwtSecretKey.getBytes(),"HmacSHA256");
        return NimbusJwtDecoder.withSecretKey(secretKey)
        .macAlgorithm(MacAlgorithm.HS256).build();
    }
    @Bean
    public AuthenticationManager authenticationManager(SigninService userServiceImp)
    {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userServiceImp);
        provider.setPasswordEncoder(new BCryptPasswordEncoder());
        return new ProviderManager(provider);//ProviderManager uses JwtDecoder to decode received jw tokens
    }
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000")); // Allow requests from localhost:3000
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    
    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    //     registry.addMapping("/**")  // Allow all endpoints
    //             .allowedOrigins("http://localhost:3000")  // Frontend URL
    //             .allowedMethods("GET", "POST", "PUT", "DELETE")
    //             .allowedHeaders("*");
    // }            
}    
/*
@EnableWebSecurity
public class SecurityConfig 
{

  
}

 */