package repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import entity.Person;



@Repository

//Takes the table name in the data type of @ID primary Key<Table Name, Data type ID>
//The interface below is the connection between the database, doesn't store the information in the database.
//
public interface TenantRespository extends JpaRepository<Person, String> {
	Person findByEmailAndPassword(String email, String password);
	
	
	Person findByEmail(String email);
	
	
	

}
