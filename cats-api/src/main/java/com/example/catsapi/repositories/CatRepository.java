package com.example.catsapi.repositories;
import com.example.catsapi.models.Cat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")

public interface CatRepository extends CrudRepository<Cat, Long> {

}