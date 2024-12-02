package com.financia.financia.dto;

import com.financia.financia.entity.Address;
import com.financia.financia.enums.UserRoles;
import java.time.LocalDate;
import java.util.List;

public record UserResponseDTO(
        Integer id,
        String name,
        String dni,
        String email,
        UserRoles role,
        Address address,
        LocalDate creation_date,
        List<DocumentDTO> documents
) {}


