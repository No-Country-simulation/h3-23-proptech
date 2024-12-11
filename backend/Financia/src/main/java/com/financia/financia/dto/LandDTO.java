package com.financia.financia.dto;

public record LandDTO(
        String location,
        String area,
        Integer price,
        Integer request_amount,
        Integer interest_rate,
        Integer term_months
) {
}
