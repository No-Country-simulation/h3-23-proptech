package com.financia.financia.entity;

import com.financia.financia.enums.OpportunityStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "opportunities")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Opportunity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "buyer_id")
    private Buyer buyer;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "land_id")
    private Land land;

    private Integer request_amount;
    private Integer interest_rate;
    private Integer term_months;

    @Enumerated(EnumType.STRING)
    private OpportunityStatus status;
}
