package com.financia.financia.dto;


import java.util.List;

public record CompleteUserDTO(
        String name,
        String dni,
        AddressDTO address,
        List<DocumentDTO> documents
)
{}
