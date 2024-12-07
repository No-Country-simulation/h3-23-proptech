package com.financia.financia.controller;

import com.financia.financia.dto.OpportunityDTO;
import com.financia.financia.service.OpportunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/opportunities")
@RequiredArgsConstructor
public class OpportunitiesController {

    private final OpportunityService opportunityService;

    @GetMapping
    public ResponseEntity<List<OpportunityDTO>> listOpportunities() {
        List<OpportunityDTO> opportunities = opportunityService.getOpportunities();
        return ResponseEntity.ok(opportunities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OpportunityDTO> getOpportunityById(@PathVariable Integer id) {
        OpportunityDTO opportunityById = opportunityService.findOpportunityById(id);
        return ResponseEntity.ok(opportunityById);
    }
}
