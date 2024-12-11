package com.financia.financia.service.impl;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.entity.Buyer;
import com.financia.financia.entity.Land;
import com.financia.financia.repository.BuyerRepository;
import com.financia.financia.repository.LandRepository;
import com.financia.financia.service.LandService;
import com.financia.financia.service.OpportunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LandServiceImpl implements LandService {

    private final LandRepository landRepository;

    private final OpportunityService opportunityService;
    private final BuyerRepository buyerRepository;

    @Override
    public Land createLand(LandDTO landDTO) {
        Land land = Land.builder()
                .location(landDTO.location())
                .area(landDTO.area())
                .price(landDTO.price())
                .build();
        Land save = landRepository.save(land);

        //Busca el email del usuario autenticado
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Buyer buyer = buyerRepository.findByEmail(email);

        opportunityService.newOpportunity(buyer, save, landDTO);
        return save;
    }
}
