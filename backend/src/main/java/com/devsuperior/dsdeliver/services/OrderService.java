package com.devsuperior.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.OrderDTO;
import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Order;
import com.devsuperior.dsdeliver.entities.OrderStatus;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.OrderRepository;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

//Registering the class 
@Service
public class OrderService {
	
	@Autowired //Automatic dependency injection (controlled by the springframework) 
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
	// DTO is a compact object which carries only what we tell him to. They don't have any relation with the database, because in the REST layer there is no more database connection (due to the architecture chosen for this project) 
	@Transactional(readOnly = true) //Preventing database locking (a read only transaction do not lock the database)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	
	@Transactional
	public OrderDTO insert(OrderDTO dto){
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), 
				Instant.now(), OrderStatus.PENDING);
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		//Saving on database
		order = repository.save(order);
		return new OrderDTO(order);
	}

}

