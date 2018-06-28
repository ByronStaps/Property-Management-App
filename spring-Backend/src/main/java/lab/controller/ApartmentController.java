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

import entity.Apartment;
import repository.ApartmentRespository;

@RestController
@CrossOrigin

public class ApartmentController {
	
	@Autowired
	ApartmentRespository  apartmentRespository;

	
	
	@RequestMapping(value="/submitapartmentDetails", method=RequestMethod.POST)
	public ResponseEntity<HttpStatus> submitApartment(@RequestBody Apartment newApartment){

		//save the information and inserting the infomration into database 
		apartmentRespository.save(newApartment);

		return new ResponseEntity<>(HttpStatus.CREATED);

	}
	
	@RequestMapping(value="/findallApartment", 
			produces=MediaType.APPLICATION_JSON_VALUE,
			
			method=RequestMethod.GET)
	@ResponseBody	
	public ResponseEntity<List<Apartment>> findAllApartments(){

		//save the information and inserting the infomration into database 
		List<Apartment> apartments = apartmentRespository.findAll();

		return new ResponseEntity<>(apartments, HttpStatus.OK);

	
}
	
	@RequestMapping(value="/deleteApartment",produces=MediaType.APPLICATION_JSON_VALUE,method=RequestMethod.DELETE)
	@ResponseBody	
	public ResponseEntity<List<Apartment>> DeleteApartment(Integer id){
		System.out.println(id);
		apartmentRespository.delete(id); 
		return findAllApartments();

	}
	
	
	

}
