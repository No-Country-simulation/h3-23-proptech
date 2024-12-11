package com.financia.financia.dto;

public record OpportunityDTO(
        Integer id,
        String buyer,
        String land,
        Integer request_amount,
        Integer interest_rate,
        Integer term_months
) {
}
