import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


class NewApartment extends Component {

    state = {
        apartmentID: '',
        bedRooms: '',
        bathRooms: '',
        sqFeet: '',
        garageSpace: '',
        rentPrice: ''
    }
    newApartmentChangeHandler = (event) => {
        //Will give the data the user enters eg 'example@email.com'
        const value = event.target.value;
        //will give us the name of that html input field eg 'email'
        const name = event.target.name;

        this.setState({
            // this will give us email:example@email.com in our state
            [name]: value
        })
    }
    newApartmentSubmitHandler = (event) => {
        //TODO add logic for API call to check save the user
        event.preventDefault();// hides the query string from being displayed on the browser
        const Apartment = {
            bedRooms: this.state.bedRooms,
            bathRooms: this.state.bathRooms,
            sqFeet: this.state.sqFeet,
            garageSpace: this.state.garageSpace,
            rentPrice: this.state.rentPrice,
            apartmentID: this.state.apartmentID,

        }
        axios.post('http://localhost:8080/submittenantDetails', Apartment)
            .then(function (response) {
            })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.newApartmentSubmitHandler}  className="container" align="center" >
                <h1 className='imagefontstyle'> Add Apartment</h1>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputApartmentID">Apartment ID</label>
                            <input type="email" onChange={this.newApartmentChangeHandler} value={this.state.apartmentID} className="form-control" id="inputApartmentID" name="apartmentID" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputbedrooms"> Bedrooms</label>
                            <input type="text" onChange={this.newApartmentChangeHandler} value={this.state.bedRooms} className="form-control" id="inputbedrooms" name="bedRooms" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputbathRooms"> Bathrooms</label>
                            <input type="text" onChange={this.newApartmentChangeHandler} value={this.state.bathRooms} className="form-control" id="inputbathRooms" name="bathRooms" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputsqFeet">Sq-Feet</label>
                            <input type="text" onChange={this.newApartmentChangeHandler} value={this.state.sqFeet} className="form-control" id="inputsqFeet" name="sqFeet" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputGarageSpace"> Garage Space</label>
                            <input type="text" onChange={this.newApartmentChangeHandler} value={this.state.garageSpace} className="form-control" id="inputgarageSpace" name="garageSpace" required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputrentPrice"> Rental Price</label>
                            <input type="text" onChange={this.newApartmentChangeHandler} value={this.state.rentPrice} className="form-control" id="inputrentPrice" name="rentPrice" required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onSubmit={this.newApartmentSubmitHandler} >Submit</button>
                </form>

            </React.Fragment>
        );
    }
}

export default NewApartment;