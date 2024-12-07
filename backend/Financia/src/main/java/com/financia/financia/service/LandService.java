package com.financia.financia.service;

import com.financia.financia.dto.LandDTO;
import com.financia.financia.entity.Land;

public interface LandService {
    Land createLand(LandDTO land);
}
