package com.financia.financia.service.impl;

import com.financia.financia.dto.*;
import com.financia.financia.entity.Address;
import com.financia.financia.entity.Document;
import com.financia.financia.entity.User;
import com.financia.financia.repository.UserRepository;
import com.financia.financia.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(PasswordEncoder passwordEncoder, UserRepository userRepository) {
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

    @Override
    public UserResponseDTO findUserById(Integer id) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            List<DocumentDTO> documentDTOs = user.getDocuments().stream()
                    .map(doc -> new DocumentDTO(
                            doc.getId(), doc.getType(), doc.getUrl()))
                    .toList();

            return new UserResponseDTO(
                    user.getId(), user.getName(), user.getDni(), user.getEmail(),
                    user.getRole(), user.getAddress(), user.getCreation_date(), documentDTOs
            );
        } else {
            return null;
        }
    }

    @Override
    public void completeRegistration(Integer userId, CompleteUserDTO completeUserDTO) {
        User user = userRepository.findById(userId).orElseThrow(
                () -> new RuntimeException("Usuario no encontrado")
        );

        user.setName(completeUserDTO.name());
        user.setDni(completeUserDTO.dni());

        Address address = new Address(
            completeUserDTO.address().country(),
            completeUserDTO.address().state(),
            completeUserDTO.address().city(),
            completeUserDTO.address().street()
        );
        user.setAddress(address);

        List<Document> documents = completeUserDTO.documents().stream()
                .map(dto -> {
            Document document = new Document();
            document.setType(dto.type());
            document.setUrl(dto.url());
            document.setUser(user);
            return document;
        }).toList();

        user.getDocuments().addAll(documents);

        userRepository.save(user);
    }

}