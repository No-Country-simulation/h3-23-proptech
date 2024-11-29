package com.financia.financia.service;

import com.financia.financia.dto.UserAuthRegisterResponseDTO;
import com.financia.financia.dto.UserPreAuthRegisterDTO;

public interface UserService {
    UserAuthRegisterResponseDTO initialRegister(UserPreAuthRegisterDTO userPreAuthRegisterDTO);

}
