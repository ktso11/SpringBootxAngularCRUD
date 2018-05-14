package com.example.fosterapi.repositories;

import com.example.fosterapi.models.Foster;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
public interface FosterRepository extends CrudRepository<Foster, Long> {

}