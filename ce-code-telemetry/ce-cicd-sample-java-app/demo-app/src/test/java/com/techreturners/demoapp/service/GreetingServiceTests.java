package com.techreturners.demoapp.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class GreetingServiceTests {

    @Autowired
    protected GreetingService greetingService;

    @Test
    void validateGreeting() {
        String greeting = greetingService.getGreeting("Hamish");
        assertThat(greeting).isEqualTo("Hey there Hamish, how's things going?");
    }
    
}
