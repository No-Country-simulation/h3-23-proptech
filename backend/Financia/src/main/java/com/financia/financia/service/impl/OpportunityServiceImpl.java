package com.financia.financia.service.impl;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.entity.Buyer;
import com.financia.financia.entity.Land;
import com.financia.financia.entity.Opportunity;
import com.financia.financia.enums.OpportunityStatus;
import com.financia.financia.repository.OpportunityRepository;
import com.financia.financia.service.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpportunityServiceImpl implements OpportunityService {
    private final OpportunityRepository opportunityRepository;

    @Autowired
    public OpportunityServiceImpl(OpportunityRepository opportunityRepository) {
        this.opportunityRepository = opportunityRepository;
    }

    @Override
    public void newOpportunity(Buyer buyer, Land land, LandDTO landDTO) {
        Opportunity opportunity = new Opportunity();
        opportunity.setBuyer(buyer);
        opportunity.setLand(land);
        opportunity.setRequest_amount(landDTO.request_amount());
        opportunity.setInterest_rate(landDTO.interest_rate());
        opportunity.setTerm_months(landDTO.term_months());
        opportunity.setStatus(OpportunityStatus.PENDING);
        opportunityRepository.save(opportunity);
    }
}
