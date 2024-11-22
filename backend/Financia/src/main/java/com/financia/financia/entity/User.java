package com.financia.financia.entity;

import com.financia.financia.enums.UserRoles;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String dni;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRoles role;

    private LocalDate creation_date;
    private String country;
    private String city;
    private String state;
}
