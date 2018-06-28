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
import entity.SignUp;
import repository.SignUpRespository;

@RestController
@CrossOrigin
public class SignUpController {
	
	//Injected the bean(an object that springs creates for you)into the object.
	@Autowired
	SignUpRespository signUpRespository;
	
	
	@RequestMapping(value="/submitsignupDetails", method=RequestMethod.POST)
	public ResponseEntity<HttpStatus> submitStudent(@RequestBody SignUp contact){
		

		//save the information and inserting the infomration into database 
		signUpRespository.save(contact);
		
		System.out.println(contact);


		return new ResponseEntity<>(HttpStatus.CREATED);

	}
	
	
	@RequestMapping(value="/findfirstContactsignUp",produces=MediaType.APPLICATION_JSON_VALUE,method=RequestMethod.GET)
	@ResponseBody	
	public ResponseEntity<SignUp> FirstContactSignUp(String email){
		//save the information and inserting the infomration into database 
		System.out.println(email);
		SignUp signee = signUpRespository.findByEmail(email);
		//tenantrepository.findOne(email);
		return new ResponseEntity<SignUp>(signee, HttpStatus.OK);

	}
	@RequestMapping(value="/deleteContactsignUp",produces=MediaType.APPLICATION_JSON_VALUE,method=RequestMethod.DELETE)
	@ResponseBody	
	public ResponseEntity<SignUp> DeleteContactSignUp(Integer id){
		System.out.println(id);
		signUpRespository.delete(id); 
		return new ResponseEntity<SignUp>( HttpStatus.OK);

	}



	@RequestMapping(value="/findallsignupContact", 
			produces=MediaType.APPLICATION_JSON_VALUE,
			
			method=RequestMethod.GET)
	@ResponseBody	
	public ResponseEntity<List<SignUp>> findAlltenants(String email){

		//save the information and inserting the infomration into database 
		List<SignUp> signee = signUpRespository.findAll();

		return new ResponseEntity<>(signee, HttpStatus.OK);

	
}

}
