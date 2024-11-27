package com.financia.financia.controller;


import com.financia.financia.dto.AuthenticationUserDTO;
import com.financia.financia.dto.LoginResponseDTO;
import com.financia.financia.entity.User;
import com.financia.financia.service.TokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;



@RestController
@RequestMapping("/login")
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;


    @PostMapping
    public ResponseEntity<?> autenticarUsuario(@RequestBody @Valid AuthenticationUserDTO authenticationUserDTO) {
        Authentication authToken = new UsernamePasswordAuthenticationToken(
                authenticationUserDTO.email(),
                authenticationUserDTO.password());
        var authenticateUser = authenticationManager.authenticate(authToken);
        var user = (User) authenticateUser.getPrincipal();
        var JWTtoken = tokenService.generateToken(user);
        var response = new LoginResponseDTO(
                JWTtoken,
                user.getId(),
                user.getRole()
        );
        return ResponseEntity.ok(response);
    }
}
