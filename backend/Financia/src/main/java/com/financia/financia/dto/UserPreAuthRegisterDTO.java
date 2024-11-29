package com.financia.financia.dto;

import com.financia.financia.enums.UserRoles;
import jakarta.validation.constraints.*;

public record UserPreAuthRegisterDTO(
        @NotBlank(message = "El email es obligatorio")
        @Email(message = "Formato de email no válido")
        String email,

        @NotBlank(message = "La contraseña es obligatoria")
        @Size(min = 8, message = "La contraseña debe tener al menos 8 caracteres")
        @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$", message = "La contraseña debe contener al menos una mayúscula, una minúscula y un número")
        String password,

        @NotNull(message = "El rol es obligatorio")
        UserRoles role
) {
}
