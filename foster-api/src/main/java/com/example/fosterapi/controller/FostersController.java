package com.example.fosterapi.controller;
import com.example.fosterapi.models.Foster;
import com.example.fosterapi.repositories.FosterRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FostersController {
        @Autowired
        FosterRepository fosterRepository;

        @GetMapping("/")
//        @CrossOrigin(origins = "http://localhost:4200")
        public Iterable<Foster> findAllfoster() {
            return fosterRepository.findAll();
        }
}


