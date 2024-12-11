package com.financia.financia.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record AuthenticationUserDTO(

        @NotBlank(message="El email es obligatorio")
        @Email(message="Formato de email no valido")
        String email,

        @NotBlank(message="La contraseña es obligatoria")
        String password
) {
}
