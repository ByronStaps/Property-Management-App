import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import {ListItemContent} from 'react-mdl';



class MaintenceRequest extends Component{
    state = {
        name:'',
        email:'' ,
        telephone:'',
        message:''
    }
    maintenceRequestSubmitHandler = (event) => {
        //Add Logic for API call to save the user, and connect to the  DataBase 
        event.preventDefault();// hides the query string from being displated on the browser;
    
        //Commuincate with out backend system.
        const maintenceRequestInformation ={
            name: this.state.name,
            email: this.state.email,
            telephone: this.state.telephone,
            message: this.state.message
        }
        //Makes call to local 8080, and the Controller requestMapping takes a URL, and the data from 
        axios.post('http://localhost:8080/maintenceRequest', maintenceRequestInformation)
    }
    maintenceRequestChangeHandler = (event) => {

        //Will give the data the user enters ie. "examples@gmail.com"
        const value = event.target.value;
    
        //Will give us the name of that html input field ie. 'email'
        const name = event.target.name;
    
        // this will five us email:expamples@gmail.com in our state
    
        this.setState({
            [name]: value
    
        })
    
    }
render(){
    return(
        <div className="container-fluid bg-grey tripform sidenav">
        <div className="row">
          <div className="col-sm-5">
            <p>Contact us and we'll get back to you within 24 hours.</p>
            <p><span className="glyphicon glyphicon-map-marker"></span> St.Louis, US</p>
            <p><span className="glyphicon glyphicon-phone"></span> +19092571763
            </p>
            <p><span className="glyphicon glyphicon-envelope"></span> Byronstaples@gmail.com</p> 
          </div>
          <div className="col-sm-7">
            <div className="row">
              <div className>
               <form onSubmit={this.maintenceRequestSubmitHandler}>
              <div className="form-group">
                <input type="text" onChange={this.maintenceRequestChangeHandler} value={this.state.name} name="name" placeholder="First Name" />
              </div>
              <div className="form-group">
                <input type="email" onChange={this.maintenceRequestChangeHandler} value={this.state.email}name="email" placeholder="Your email" />
              </div>
              <div className="form-group">
                <input type="text" onChange={this.maintenceRequestChangeHandler} value={this.state.telephone}name="telephone" placeholder="Telephone Number" />
              </div>
              <div className="form-group">
                <textarea onChange={this.maintenceRequestChangeHandler} value={this.state.message} name="message" placeholder="Your message"></textarea>
              </div>
              <button className="btn btn-danger" type="submit">Send</button>
            </form>
       </div>
       </div>
       </div>
       </div>
       </div>     



    );

}

}
export default MaintenceRequest;