import React, { Component } from 'react';
 import {Redirect} from 'react-router-dom';
 import axios from 'axios';


 class RegisterTenant extends Component {

    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        telephone:'',
        rent_due:'',
        lease_renew:'',
        apartmentID:''
    }
    newTenantChangeHandler = (event) => {
        //Will give the data the user enters eg 'example@email.com'
        const value = event.target.value;
        //will give us the name of that html input field eg 'email'
        const name = event.target.name;

        this.setState({
            // this will give us email:example@email.com in our state
            [name]:value
        })
    }
    newTenantSubmitHandler = (event) => {
        //TODO add logic for API call to check save the user
        event.preventDefault();// hides the query string from being displayed on the browser
        const Tenant = {
            email:this.state.email,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            telephone:this.state.telephone,
            rent_due:this.state.rent_due,
            lease_renew:this.state.lease_renew,
            apartmentID:this.state.apartmentID,


        }
        axios.post('http://localhost:8080/submittenantDetails',Tenant)
        .then(function (response){
            console.log("user created we should add redirect here to thank you page")
        })
    }
    
    render() {
        let redirect = null;
        if(this.props.isLoggedInUser){
        redirect = (<Redirect to="/home" /> );
        }
        return (
            <React.Fragment>
            {redirect}
            <form onSubmit={this.newTenantSubmitHandler} className="container" align="center">
            <h1 className="imagefontstyle">Register Tenant</h1>            
                <div className="form-row">
                <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={this.newTenantChangeHandler} value={this.state.firstName} name="firstName" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={this.newTenantChangeHandler} value={this.state.lastName} name="lastName" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="telephone">Telephone</label>
                        <input type="text" onChange={this.newTenantChangeHandler} value={this.state.telephone} name="telephone" className="form-control" id="telephone" placeholder="Telephone" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" onChange={this.newTenantChangeHandler} value={this.state.email} name="email" className="form-control" id="inputEmail4" placeholder="Emai" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" onChange={this.newTenantChangeHandler} value={this.state.password} name="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Rent Due</label>
                        <input type="date" onChange={this.newTenantChangeHandler} value={this.state.rent_due} name="rent_due" className="form-control" id="inputrent_due" placeholder="Rent_Due" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Lease Renew</label>
                        <input type="date" onChange={this.newTenantChangeHandler} value={this.state.lease_renew} name="lease_renew" className="form-control" id="inputlease_renew" placeholder="Lease_Renew" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Apartment_ID</label>
                        <input type="id" onChange={this.newTenantChangeHandler} value={this.state.apartmentID} name="apartment_id" className="form-control" id="inputapartment_id" placeholder="Apartment_ID" />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

             </React.Fragment>
        );
    }
}

export default RegisterTenant;