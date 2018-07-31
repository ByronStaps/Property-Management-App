package entity;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity

// Name the table you trying to map this data table
@Table(name = "person")

public class Person {	

	
	@Column(name="apartmentID")
	private int aprtment_ID;

	@Id // Unique Identifiers 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="person_id")
	private int id;
	@Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
	@Column(name="first_Name")
	private String firstName;
	@Column(name="last_Name")
	private String lastName;
	@Column(name="telephone")
	private String telephone;
	@Column(name="rent_due")
	Date rentDue;		
	@Column(name="lease_renew")
	Date leaseRenew;
	@Column(name="role")
	String role = RoleName.ROLE_USER.role();
	
	public Person() {

	}


	@Override
	public String toString() {
		return "Tenants [email=" + email + ", password=" + password + ", firstName=" + firstName + ", lastName="
				+ lastName + ", telephone=" + telephone + ", rentDue=" + rentDue + ", leaseRenew=" + leaseRenew + "]";
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public Date getRentDue() {
		return rentDue;
	}

	public void setRentDue(Date rentDue) {
		this.rentDue = rentDue;
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


	public Date getLeaseRenew() {
		return leaseRenew;
	}

	public void setLeaseRenew(Date leaseRenew) {
		this.leaseRenew = leaseRenew;
	
}


	public int getAprtment_ID() {
		return aprtment_ID;
	}

	public void setAprtment_ID(int aprtment_ID) {
		this.aprtment_ID = aprtment_ID;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}
	
}
