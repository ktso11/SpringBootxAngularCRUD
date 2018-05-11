package com.example.catsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
public class CatsApiApplication {

	@RequestMapping("/")
	public String home() {
		return "return the cats!";
	}

	public static void main(String[] args) {
		SpringApplication.run(CatsApiApplication.class, args);
	}
}