package com.example.catsapi.controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
import com.example.catsapi.models.Cat;
import com.example.catsapi.repositories.CatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CatsController {
    @Autowired
    CatRepository catRepository;

    @GetMapping("/")
//    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<Cat> findAllCats() {
        return catRepository.findAll();
    }

    @GetMapping("/{catId}")
    public Cat findCatById(@PathVariable Long catId) {
        return catRepository.findOne(catId);
    }

    @DeleteMapping("/{catId}")
    public HttpStatus deleteCatById(@PathVariable Long catId) {
        catRepository.delete(catId);
        return HttpStatus.OK;
    }
    @PostMapping("/")
    public Cat createNewCat(@RequestBody Cat newCat) {
        return catRepository.save(newCat);
    }
    @PatchMapping("/{catId}")
    public Cat updateCatById(@PathVariable Long catId, @RequestBody Cat catRequest) {
        Cat catFromDb = catRepository.findOne(catId);
        catFromDb.setName(catRequest.getName());
        catFromDb.setLocation(catRequest.getLocation());
        return catRepository.save(catFromDb);
    }

}
