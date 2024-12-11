package com.financia.financia.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "investments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Investment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne
    @JoinColumn(name = "opportunity_id")
    private Opportunity opportunity;

    @ManyToOne
    @JoinColumn(name = "investor_id")
    private Investor investor;

    @Column(name = "invest_amount")
    private Integer investmentAmount;

    @Column(name = "invest_date")
    private LocalDate investmentDate;

    @PrePersist
    void prePersist() {
        this.investmentDate = LocalDate.now();
    }
}
