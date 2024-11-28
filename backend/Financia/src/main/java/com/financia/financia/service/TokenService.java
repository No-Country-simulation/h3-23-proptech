package com.financia.financia.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.financia.financia.entity.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;

@Service
public class TokenService {

    //@Value("${api.security.secret}")
    @Value("my secret key")
    private String apiSecret;

    public String generateToken(User user) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            return JWT.create()
                    .withIssuer("com.financia financia")
                    .withSubject(user.getUsername())
                    .withClaim("id", user.getId())
                    .withExpiresAt(generateExpirationDate())
                    .sign(algorithm);
        } catch (JWTCreationException exception) {
            throw new RuntimeException("Error creating JWT token", exception);
        }
    }

    public String getSubject(String token) {
        if (token == null) {
            throw new RuntimeException("Token is null");
        }
        try {
            Algorithm algorithm = Algorithm.HMAC256(apiSecret);
            DecodedJWT verifier = JWT.require(algorithm)
                    .withIssuer("com.financia financia")
                    .build()
                    .verify(token);
            String subject = verifier.getSubject();
            if (subject == null) {
                throw new RuntimeException("Verifier invalid: subject is null");
            }
            return subject;
        } catch (JWTVerificationException exception) {
            System.out.println("JWT Verification Exception: " + exception.toString());
            throw new RuntimeException("Error verifying JWT token", exception);
        }
    }

    private Instant generateExpirationDate() {
        return ZonedDateTime.now(ZoneOffset.of("-05:00"))
                .plusHours(2)
                .toInstant();
    }
}
