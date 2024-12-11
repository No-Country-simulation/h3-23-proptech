package com.financia.financia.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "investors")
@Getter
@Setter
public class Investor extends User {
}
