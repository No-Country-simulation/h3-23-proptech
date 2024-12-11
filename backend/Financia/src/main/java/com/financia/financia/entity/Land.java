package com.financia.financia.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "lands")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
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

    @PrePersist
    private void prePersist() {
        this.unit_measure = "metros";
        this.creation_date = LocalDate.now();
    }
}
