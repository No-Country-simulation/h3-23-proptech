package com.financia.financia.controller;


import com.financia.financia.dto.AuthenticationUserDTO;
import com.financia.financia.dto.LoginResponseDTO;
import com.financia.financia.entity.User;
import com.financia.financia.service.TokenService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
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
        try {
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
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales incorrectas");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ocurrió un error en el servidor");
        }
    }
}