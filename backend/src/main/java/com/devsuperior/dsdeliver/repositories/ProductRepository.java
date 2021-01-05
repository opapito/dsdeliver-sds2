package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Product;

//Object responsible for database access
//JpaRepository already contains pre-coded methods for database access 
public interface ProductRepository extends JpaRepository<Product, Long>{
	List<Product> findAllByOrderByNameAsc();
}
