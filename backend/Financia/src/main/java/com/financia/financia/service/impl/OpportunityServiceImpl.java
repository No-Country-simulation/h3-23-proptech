package com.financia.financia.service.impl;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.dto.OpportunityDTO;
import com.financia.financia.entity.Buyer;
import com.financia.financia.entity.Land;
import com.financia.financia.entity.Opportunity;
import com.financia.financia.enums.OpportunityStatus;
import com.financia.financia.repository.OpportunityRepository;
import com.financia.financia.service.OpportunityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    @Override
    public List<OpportunityDTO> getOpportunities() {
        List<Opportunity> all = opportunityRepository.findAll();

        return all.stream().map(opportunity -> new OpportunityDTO(
                opportunity.getId(),
                opportunity.getBuyer().getName(),
                opportunity.getLand().getLocation(),
                opportunity.getRequest_amount(),
                opportunity.getInterest_rate(),
                opportunity.getTerm_months()
        )).collect(Collectors.toList());
    }

    @Override
    public OpportunityDTO findOpportunityById(Integer id) {
        Optional<Opportunity> opportunity = opportunityRepository.findById(id);
        if (opportunity.isPresent()) {
            Opportunity opportunityDB = opportunity.get();
            return new OpportunityDTO(opportunityDB.getId(),
                    opportunityDB.getBuyer().getName(),
                    opportunityDB.getLand().getLocation(),
                    opportunityDB.getRequest_amount(),
                    opportunityDB.getInterest_rate(),
                    opportunityDB.getTerm_months());
        }

        return null;
    }
}
