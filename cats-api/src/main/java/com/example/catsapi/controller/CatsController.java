package com.example.catsapi.controller;

import com.example.catsapi.models.Cat;
import com.example.catsapi.repositories.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CatsController {
    @Autowired
    CatRepository catRepository;
    @GetMapping("/allcats")
    public Iterable<Cat> findAllCats() {
        return catRepository.findAll();
    }
}
