package com.techreturners.demoapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.techreturners.demoapp.service.GreetingService;

@Controller
public class GreetingController {

    @Autowired
    protected GreetingService greetingService;

	@GetMapping("/greeting")
	public String greeting(@RequestParam(name="name", required=false, defaultValue="friend") String name, Model model) {
		model.addAttribute("name", greetingService.getGreeting(name));
		return "greeting";
	}

}