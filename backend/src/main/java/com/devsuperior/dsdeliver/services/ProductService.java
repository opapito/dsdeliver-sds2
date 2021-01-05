package com.devsuperior.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsdeliver.dto.ProductDTO;
import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.repositories.ProductRepository;

//Registering the class 
@Service
public class ProductService {
	
	@Autowired //Automatic dependency injection (controlled by the springframework) 
	private ProductRepository repository;
	
	// DTO is a compact object which carries only what we tell him to. They don't have any relation with the database, because in the REST layer there is no more database connection (due to the architecture chosen for this project) 
	@Transactional(readOnly = true) //Preventing database locking (a read only transaction do not lock the database)
	public List<ProductDTO> findAll(){
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}

