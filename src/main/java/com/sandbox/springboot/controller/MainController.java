package com.sandbox.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by amatriuc on 10/18/2017.
 */
@RestController
@RequestMapping("/main")
public class MainController {

    @GetMapping("/test/")
    public String test() {
        String response = "hui";
        return response;
    }

}
