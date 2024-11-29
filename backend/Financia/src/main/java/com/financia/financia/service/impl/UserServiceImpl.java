package com.financia.financia.service.impl;

import com.financia.financia.dto.UserAuthRegisterResponseDTO;
import com.financia.financia.dto.UserPreAuthRegisterDTO;
import com.financia.financia.entity.User;
import com.financia.financia.repository.UserRepository;
import com.financia.financia.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Autowired public UserServiceImpl(PasswordEncoder passwordEncoder, UserRepository userRepository) {
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public UserAuthRegisterResponseDTO initialRegister(UserPreAuthRegisterDTO userPreAuthRegisterDTO) {
        if (userRepository.existsByEmail(userPreAuthRegisterDTO.email())) {
            throw new IllegalArgumentException("El email ya está en uso");
        }
        User user = new User();
        user.setEmail(userPreAuthRegisterDTO.email());
        user.setPassword(passwordEncoder.encode(userPreAuthRegisterDTO.password()));
        user.setRole(userPreAuthRegisterDTO.role());
        userRepository.save(user);

        return new UserAuthRegisterResponseDTO(
                user.getId(), user.getEmail(), user.getRole()
        );
    }
}
