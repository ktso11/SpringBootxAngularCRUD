package com.example.fosterapi.repositories;

import com.example.fosterapi.models.Foster;
import org.springframework.data.repository.CrudRepository;

public interface FosterRepository extends CrudRepository<Foster, Long> {

}