package com.devsuperior.dsdeliver.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.services.OrderService;

// REST CONTROLLER
@RestController
@RequestMapping(value = "/orders")
public class OrderController {

		@Autowired
		private OrderService service;
		
		@GetMapping
		public ResponseEntity<List<OrderDTO>> findAll(){
			List<OrderDTO> list = service.findAll();
			return ResponseEntity.ok().body(list);
					// ok means for 200 http code response
		}
		
		@PostMapping
		public ResponseEntity<OrderDTO> insert(@RequestBody OrderDTO dto){
			dto = service.insert(dto);
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(dto.getId()).toUri();
			return ResponseEntity.created(uri).body(dto); //Necessary for a 201 http response (resource has been successfully created)
		}
		
		/*
		 * Idempotency means that multiple identical requests will have the same outcome. 
		 * So it does not matter if a request is sent once or multiple times.
		 * The following HTTP methods are idempotent: GET, HEAD, OPTIONS, TRACE, PUT and DELETE
		 * 
		 * Why is Idempotent important? 
		 * Idempotency is important in APIs because a resource may be called multiple times if the network is interrupted. 
		 * In this scenario, non-idempotent operations can cause significant unintended side-effects by creating additional
		 * resources or changing them unexpectedly.
		 */
		@PutMapping("/{id}/delivered")
		public ResponseEntity<OrderDTO> setDelivered(@PathVariable Long id){
			//The notation "@PathVariable" if for the parameter "id" to match with the "{id}" in the path route
			OrderDTO dto = service.setDelivered(id);
			return ResponseEntity.ok().body(dto);
		}
}
