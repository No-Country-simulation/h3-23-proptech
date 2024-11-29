package com.financia.financia.controller;


import com.financia.financia.dto.UserAuthRegisterResponseDTO;
import com.financia.financia.dto.UserPreAuthRegisterDTO;
import com.financia.financia.service.impl.UserServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/users")
public class UserController {

    public final UserServiceImpl userServiceImpl;

    public UserController(UserServiceImpl userServiceImpl){
        this.userServiceImpl = userServiceImpl;
    }

    @PostMapping("/register")
    public ResponseEntity<UserAuthRegisterResponseDTO>  registerUser(@RequestBody @Valid UserPreAuthRegisterDTO userPreAuthRegisterDTO, UriComponentsBuilder uriComponentsBuilder){
        UserAuthRegisterResponseDTO response = userServiceImpl.initialRegister(userPreAuthRegisterDTO);
        URI url = uriComponentsBuilder.path("/user/{id}")
                .buildAndExpand(response.id()).toUri();
        return ResponseEntity.created(url).body(response);
    }
}