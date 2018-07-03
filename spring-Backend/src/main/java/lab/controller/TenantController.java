package lab.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import entity.Person;
import repository.TenantRespository;

@RestController
@CrossOrigin

public class TenantController {
	
    public static final String ACCOUNT_SID = "ACdbd21fc9a2dbe91be5ce890580a3c7ae";
    public static final String AUTH_TOKEN = "b665af8ed62a508a19c7cf4e0d24e529";
	

	


	
	
	
	//Injected the bean(an object that springs creates for you)into the object.
	@Autowired
	TenantRespository tenantrepository;





/*	1."Value" = The URL Path t o the Servlet, or the name of Servlet
	2."Method" =   
 	3.@Requesting Method creates a listener. 
 	4.Save the information and inserting the infomration into database 
*/
	
	@RequestMapping(value="/sign-in", method=RequestMethod.POST)
	public ResponseEntity<Person> signIn(@RequestBody Person tenants){ 
		
		Person tenantFromDatabase = this.tenantrepository.
				findByEmailAndPassword(tenants.getEmail(), tenants.getPassword()) ;
		System.out.println(tenants);
		if(tenantFromDatabase == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Person>(tenantFromDatabase,HttpStatus.OK);
	}

	@RequestMapping(value="/submittenantDetails", method=RequestMethod.POST)
	public ResponseEntity<HttpStatus> submitStudent(@RequestBody Person tenants){

		//save the information and inserting the infomration into database 
		tenantrepository.save(tenants);

		return new ResponseEntity<>(HttpStatus.CREATED);

	}
	
	
	//save the information and inserting the infomration into database 
	//tenantrepository.findOne(email);

	
	@RequestMapping(value="/findtenant",produces=MediaType.APPLICATION_JSON_VALUE,method=RequestMethod.GET)
	@ResponseBody	
	public ResponseEntity<Person> firstStudent(String email){
		System.out.println(email);
		Person tenants = tenantrepository.findByEmail(email);
		return new ResponseEntity<Person>(tenants, HttpStatus.OK);

	}

	@RequestMapping(value="/findAlltenant", 
			produces=MediaType.APPLICATION_JSON_VALUE,
			
			method=RequestMethod.GET)
	@ResponseBody	
	public ResponseEntity<List<Person>> findAlltenants(String email){

		//save the information and inserting the infomration into database 
		List<Person> tenants = tenantrepository.findAll();

		return new ResponseEntity<>(tenants, HttpStatus.OK);

	
}
	
}
