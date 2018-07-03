package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Apartment;

@Repository

//Takes the table name in the data type of @ID primary Key<Table Name, Data type ID>
//The interface below is the connection between the database, doesn't store the information in the database.
public interface ApartmentRespository extends JpaRepository<Apartment, Integer> {


			
			
			
			

		
	


}
