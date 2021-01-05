package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.repositories.OrderRepository;

//Registering the class 
@Service
public class OrderService {
	
	@Autowired //Automatic dependency injection (controlled by the springframework) 
	private OrderRepository repository;
	
	// DTO is a compact object which carries only what we tell him to. They don't have any relation with the database, because in the REST layer there is no more database connection (due to the architecture chosen for this project) 
	@Transactional(readOnly = true) //Preventing database locking (a read only transaction do not lock the database)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}

