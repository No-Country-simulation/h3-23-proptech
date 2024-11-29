package com.financia.financia.dto;

import com.financia.financia.enums.UserRoles;

public record UserAuthRegisterResponseDTO(
        Integer id,
        String email,
        UserRoles role
) {
}
