package com.financia.financia.controller;


import com.financia.financia.dto.CompleteUserDTO;
import com.financia.financia.dto.UserAuthRegisterResponseDTO;
import com.financia.financia.dto.UserResponseDTO;
import com.financia.financia.dto.UserPreAuthRegisterDTO;
import com.financia.financia.service.impl.UserServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
        URI url = uriComponentsBuilder.path("/users/{id}")
                .buildAndExpand(response.id()).toUri();
        return ResponseEntity.created(url).body(response);
    }

    @GetMapping("/{idUser}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable("idUser") Integer idUser) {
        UserResponseDTO user = userServiceImpl.findUserById(idUser);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("/{idUser}/complete-registration")
    public ResponseEntity<?> completeRegistration(@PathVariable("idUser") Integer idUser, @RequestBody @Valid CompleteUserDTO completeUserDTO) {
        userServiceImpl.completeRegistration(idUser, completeUserDTO);
        return ResponseEntity.ok().build();
    }

}