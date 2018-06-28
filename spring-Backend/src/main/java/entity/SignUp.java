package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


//Name the table you trying to map this data table
@Entity
@Table(name="signup")
public class SignUp {

	@Id	// Unique Identifiers 	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="signupID")
	private int signupID;
	@Column(name="email")
	private String email;
	@Column(name="first_Name")		
	private String firstName;
	@Column(name="last_Name")
	private String lastName;
	@Column(name="telephone")
	private String telephone;
	@Column(name="garageSpace")
	private String garageSpace;
	
	
	public int getSignupID() {
		return signupID;
	}


	public SignUp() {

	}


	public SignUp(int signupID, String email, String firstName, String lastName, String telephone,
			String garageSpace) {

		this.signupID = signupID;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
		this.telephone = telephone;
		this.garageSpace = garageSpace;
	}


	public void setSignupID(int signupID) {
		this.signupID = signupID;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getGarageSpace() {
		return garageSpace;
	}
	public void setGarageSpace(String garageSpace) {
		this.garageSpace = garageSpace;
	}
	@Override
	public String toString() {
		return "Contact_SignUp [signupID=" + signupID + ", email=" + email + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", telephone=" + telephone + ", garageSpace=" + garageSpace + "]";
	}

















}
