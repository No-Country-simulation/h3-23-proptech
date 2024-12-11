package com.financia.financia.service;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.dto.OpportunityDTO;
import com.financia.financia.entity.Buyer;
import com.financia.financia.entity.Land;

import java.util.List;

public interface OpportunityService {
    void newOpportunity(Buyer buyer, Land land, LandDTO landDTO);
    List<OpportunityDTO> getOpportunities();
    OpportunityDTO findOpportunityById(Integer id);
}
