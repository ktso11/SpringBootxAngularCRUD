package com.example.catsapi.repositories;
import com.example.catsapi.models.Cat;
import org.springframework.data.repository.CrudRepository;

public interface CatRepository extends CrudRepository<Cat, Long> {

}