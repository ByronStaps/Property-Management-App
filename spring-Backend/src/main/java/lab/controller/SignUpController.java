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

import entity.MaintenceRequest;
import entity.SignUp;
import lab.service.SendMail;
import repository.MaintenceRequestRepository;
import repository.SignUpRespository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.twilio.rest.api.v2010.account.MessageCreator;

@RestController
@CrossOrigin
public class SignUpController {
	
    public static final String ACCOUNT_SID = "ACdbd21fc9a2dbe91be5ce890580a3c7ae";
    public static final String AUTH_TOKEN = "b665af8ed62a508a19c7cf4e0d24e529";
    
    
	
	
	//Injected the bean(an object that springs creates for you)into the object.
	@Autowired
	SignUpRespository signUpRespository;
	
	@Autowired
	MaintenceRequestRepository maintenceRequestRepository;
	
	@Autowired
	SendMail sendMailService;
	
	
	@RequestMapping(value="/maintenceRequest", method=RequestMethod.POST)
	public ResponseEntity<HttpStatus> maintenceRequest(@RequestBody MaintenceRequest mess ){
		System.out.println(mess);
//	maintenceRequestRepository.save(mess);
		 Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
	        Message message = Message.creator(
	        		//to number
	                new com.twilio.type.PhoneNumber("+19092571763"),
	                //from number
	                new com.twilio.type.PhoneNumber("+14243960041"),
	                mess.getMessage())
	            .create();
	        
			sendMailService.sendMails(mess.getEmail(),"Maintence Request","Thank you, we recieved your request in will be in touch in "
					+ "the next 24 hours"+" \n"+" \n"+"Byron Staples\nProperty Management 909-257-1763");


	        System.out.println(message.getSid());
	        
	        return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value="/submitsignupDetails", method=RequestMethod.POST)
	public ResponseEntity<HttpStatus> submitStudent(@RequestBody SignUp contact){
		

		//save the information and inserting the infomration into database 
		signUpRespository.save(contact);
		sendMailService.sendMails(contact.getEmail(), "Property Inquire", "Hi" + " " + contact.getFirstName()+"  \nThank one of our team members would be in contact shortly "
				+ " \n"+" \n"+"Byron Staples\nProperty Management 909-257-1763");
		
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
	public ResponseEntity<List<SignUp>> DeleteContactSignUp(Integer id){
		System.out.println(id);
		signUpRespository.delete(id); 
		return findAllSignUpContact();

	}



	@RequestMapping(value="/findallsignupContact", 
			produces=MediaType.APPLICATION_JSON_VALUE,
			
			method=RequestMethod.GET)
	@ResponseBody	
	public ResponseEntity<List<SignUp>> findAllSignUpContact(){

		//save the information and inserting the infomration into database 
		List<SignUp> signee = signUpRespository.findAll();

		return new ResponseEntity<>(signee, HttpStatus.OK);

	
}

}
