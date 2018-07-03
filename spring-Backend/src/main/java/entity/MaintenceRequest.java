package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity(name="maintenceRequest")
public class MaintenceRequest {
	
	@Column(name="name")
	private String name;
	@Id
	@Column(name="email")
	private String email;
	@Column(name="telephone")
	private String telephone;
	@Column(name="message")
	private String message;
	
	
	
	public MaintenceRequest() {
		
		
	}
	






	public String getName() {
		return name;
	}







	public void setName(String name) {
		this.name = name;
	}







	public String getEmail() {
		return email;
	}







	public void setEmail(String email) {
		this.email = email;
	}







	public String getTelephone() {
		return telephone;
	}







	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}







	public String getMessage() {
		return message;
	}







	public void setMessage(String message) {
		this.message = message;
	}







	@Override
	public String toString() {
		return "MaintenceRequest [email=" + email + ", number=" + telephone + ", message=" + message + "]";
	}
	
	

}
