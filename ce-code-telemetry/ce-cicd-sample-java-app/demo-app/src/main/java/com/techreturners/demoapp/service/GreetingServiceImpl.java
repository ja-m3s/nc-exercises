package com.techreturners.demoapp.service;

import org.springframework.stereotype.Service;

@Service
public class GreetingServiceImpl implements GreetingService{

    @Override
    public String getGreeting(String name) {
        return String.format("Hey there %s, how's things going?", name);
    }
    
}
