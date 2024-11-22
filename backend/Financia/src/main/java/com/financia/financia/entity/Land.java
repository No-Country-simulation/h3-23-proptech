package com.financia.financia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "lands")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Land {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String location;
    private String area;
    private String unit_measure;
    private Integer price;
    private LocalDate creation_date;
    private String geo_coordinates;
}
