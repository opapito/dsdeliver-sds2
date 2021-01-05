package com.devsuperior.dsdeliver.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdeliver.entities.Order;

//Object responsible for database access
//JpaRepository already contains pre-coded methods for database access 
public interface OrderRepository extends JpaRepository<Order, Long>{
	
	// We need a response containing only PEDDING products ordered from older to new
	//Using JPQL query (similar to SQL)
	// After "FROM" clause you need to use the class name
	// JOIN FETCH does a INNER JOIN
	// The enum type PENDDING corresponds to 0 
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products " 
				+ " WHERE obj.status = 0 ORDER BY obj.moment ASC" )
	List<Order> findOrdersWithProducts();
}
