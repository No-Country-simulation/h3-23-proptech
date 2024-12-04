package com.financia.financia.service;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.entity.Buyer;
import com.financia.financia.entity.Land;

public interface OpportunityService {
    void newOpportunity(Buyer buyer, Land land, LandDTO landDTO);
}
