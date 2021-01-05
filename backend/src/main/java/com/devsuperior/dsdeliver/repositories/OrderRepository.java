package com.devsuperior.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdeliver.entities.Order;

//Object responsible for database access
//JpaRepository already contains pre-coded methods for database access 
public interface OrderRepository extends JpaRepository<Order, Long>{

}
