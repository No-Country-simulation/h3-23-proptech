package com.financia.financia.controller;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.service.LandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lands")
public class LandController {
    private final LandService landService;

    @Autowired
    public LandController(LandService landService) {
        this.landService = landService;
    }

    @PostMapping("/save")
    public ResponseEntity<?> registerLand(@RequestBody LandDTO landDTO) {
        landService.createLand(landDTO);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
