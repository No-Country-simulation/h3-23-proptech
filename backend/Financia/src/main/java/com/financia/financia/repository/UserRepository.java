package com.financia.financia.repository;


import com.financia.financia.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    UserDetails findByEmail(String username);

    boolean existsByEmail(String email);
}
