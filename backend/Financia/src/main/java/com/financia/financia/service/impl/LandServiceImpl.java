package com.financia.financia.service.impl;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.entity.Land;
import com.financia.financia.repository.LandRepository;
import com.financia.financia.service.LandService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LandServiceImpl implements LandService {

    private final LandRepository landRepository;

    @Override
    public Land createLand(LandDTO landDTO) {
        Land land = Land.builder()
                .location(landDTO.location())
                .area(landDTO.area())
                .price(landDTO.price())
                .build();
        return landRepository.save(land);
    }
}
