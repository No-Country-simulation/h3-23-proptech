package com.financia.financia.service;

import com.financia.financia.dto.CompleteUserDTO;
import com.financia.financia.dto.UserAuthRegisterResponseDTO;
import com.financia.financia.dto.UserResponseDTO;
import com.financia.financia.dto.UserPreAuthRegisterDTO;

public interface UserService {
    UserAuthRegisterResponseDTO initialRegister(UserPreAuthRegisterDTO userPreAuthRegisterDTO);
    UserResponseDTO findUserById(Integer id);
    void completeRegistration(Integer userId, CompleteUserDTO completeUserDTO);
}
