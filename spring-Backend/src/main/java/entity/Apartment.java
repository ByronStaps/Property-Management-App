package entity;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity

//Name the table you trying to map this data table
@Table(name = "apartment")
public class Apartment {
	
	@Id
	@Column(name="apartment_id")
	private int apartment_ID;
	
	@Column(name="bedrooms")
	private String bedRooms;
	
	@Column(name="bathrooms")
	private String bathRooms;
	
	@Column(name="sq_ft")
	private String sqFeet;
	
	@Column(name="garage_space")
	private String garageSpace;
	
	@Column(name="rent_price")
	private int rentPrice;



	
	public Apartment() {
		
	}

	public Apartment(int aprtment_ID, String bedRooms, String bathRoom, String sqFeet, String garageSpace,
			int rentPrice) {
		super();
		this.apartment_ID = aprtment_ID;
		this.bedRooms = bedRooms;
		this.bathRooms = bathRoom;
		this.sqFeet = sqFeet;
		this.garageSpace = garageSpace;
		this.rentPrice = rentPrice;
	}

	public int getAprtment_ID() {
		return apartment_ID;
	}

	public void setAprtment_ID(int apartment_ID) {
		this.apartment_ID = apartment_ID;
	}

	public int getRentPrice() {
		return rentPrice;
	}

	public void setRentPrice(int rentPrice) {
		this.rentPrice = rentPrice;
	}


	public String getBedRooms() {
		return bedRooms;
	}

	public void setBedRooms(String bedRooms) {
		this.bedRooms = bedRooms;
	}

	public String getBathRoom() {
		return bathRooms;
	}

	public void setBathRoom(String bathRoom) {
		this.bathRooms = bathRoom;
	}

	public String getSqFeet() {
		return sqFeet;
	}

	public void setSqFeet(String sqFeet) {
		this.sqFeet = sqFeet;
	}

	public String getGarageSpace() {
		return garageSpace;
	}

	public void setGarageSpace(String garageSpace) {
		this.garageSpace = garageSpace;
	}

	@Override
	public String toString() {
		return "Apartment [aprtment_ID=" + apartment_ID + ", bedRooms=" + bedRooms + ", bathRoom=" + bathRooms
				+ ", sqFeet=" + sqFeet + ", garageSpace=" + garageSpace + ", rentPrice=" + rentPrice + "]";
	}







}
