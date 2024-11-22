package com.financia.financia.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "buyers")
@Getter
@Setter
public class Buyer extends User {

    private int credit_score;
    private Boolean validate;

}
