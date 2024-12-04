package com.financia.financia.repository;

import com.financia.financia.entity.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyerRepository extends JpaRepository<Buyer, Long> {
    Buyer findByEmail(String email);
}
