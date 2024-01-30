package com.amedvedev.myList.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LandingController {

    @GetMapping("/")
    public String getLanding() {
        return "landingPage/index.html";
    }
}
