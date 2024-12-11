package com.financia.financia.dto;


import com.financia.financia.enums.UserRoles;


public record LoginResponseDTO(
        String jwtToken,
        Integer id,
        UserRoles role
) {
}
