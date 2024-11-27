package com.financia.financia.entity;

import com.financia.financia.enums.UserRoles;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements UserDetails {

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


    //Getters
    public Integer getId() {
        return id;
    }

    public UserRoles getRole() {
        return role;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        switch (this.role) {
            case ADMIN:
                return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"));
            case BUYER:
                return List.of(new SimpleGrantedAuthority("ROLE_BUYER"));
            case INVESTOR:
                return List.of(new SimpleGrantedAuthority("ROLE_INVESTOR"));
            default:
                throw new IllegalArgumentException("Unknown role: " + this.role);
        }
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
