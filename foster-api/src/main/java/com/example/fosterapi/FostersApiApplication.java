package com.example.fosterapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
public class FostersApiApplication {

	@RequestMapping("/foster-api")
	public String home() {
		return "return the foster!";
	}

	public static void main(String[] args) {
		SpringApplication.run(FostersApiApplication.class, args);
	}
}