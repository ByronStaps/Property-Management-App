import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import pic1 from '../../Images/pic1.jpg';
import pic2 from '../../Images/pic2.jpg';
import pic4 from '../../Images/pic4.jpg';
import pic5 from '../../Images/pic5.jpg';
import pic6 from '../../Images/pic6.jpg';
import pic7 from '../../Images/pic7.jpg';
import pic9 from '../../Images/pic9.jpg';
import pic10 from '../../Images/pic10.jpg';
import pic11 from '../../Images/pic11.jpg';


class SignUp extends Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        telephone: '',
        garageSpace: ''
    }

    signUpSubmitHandler = (event) => {
        //Add Logic for API call to save the user, and connect to the  DataBase 
        event.preventDefault();// hides the query string from being displated on the browser;

        //Commuincate with out backend system.
        const contactInformation = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            telephone: this.state.telephone,
            garageSpace: this.state.garageSpace,

        }

        //Makes call to local 8080, and the Controller requestMapping takes a URL, and the data from 
        axios.post('http://localhost:8080/submitsignupDetails', contactInformation)




    }

    signUpChangeHandler = (event) => {

        //Will give the data the user enters ie. "examples@gmail.com"
        const value = event.target.value;

        //Will give us the name of that html input field ie. 'email'
        const name = event.target.name;

        // this will five us email:expamples@gmail.com in our state

        this.setState({
            [name]: value

        })

    }

    render() {
        let redirect = null;

        if (this.props.isLoggedInuser) {
            redirect = (<Redirect to="/" />);
        }


        return (
            <React.Fragment>
  <div className="w3-content" style={{ 'max-width': '1200px' }}>

{/* First Grid: Logo & About   */}
<div className="w3-row">
    <div className="w3-half w3-container">
        <h1 className="w3-xxlarge w3-text-light-grey">Let Us</h1>
        <h1 className="w3-xxlarge w3-text-grey">Be Your</h1>
        <h1 className="w3-jumbo">Next Home</h1>
    </div>
    <div className="w3-half w3-container w3-xlarge w3-text-grey">
    <h1 className="zx"> Downtown St.Louis </h1>
        <p className="">
        
            The genesis and development of the historic Arcade Apartments renovation project – a jewel of the city’s downtown revitalization strategy – is the result of Dominium’s collaboration with many area groups and organizations including the city, Webster University, and Downtown St. Louis, Inc.

        </p>
    </div>
</div>

{/* Second Grid: Resent   */}
<div className="bodyfontstyle">
    <h4>Like Us On YouTube:</h4>
</div>
<div className="w3-row">
    <div className="w3-half w3-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/7OlE9PAezyQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <br/>
    <br/>
    </div>
    <br/>
    <br/>
    <br/>

    <div className="w3-half w3-container">
        <img src={pic7} style={{ width: '100%' }} />
        <br/>
        <br/>
        <p className="w3-xlarge bodyfontstyle contactusstyle" >
            RoofTop Pool, Bowling, Rockclimb, 24/7 Fitness, Events, Media, Pet Friendly, RoofTop Bar </p>
    </div>

     <form onSubmit={this.signUpSubmitHandler} >
                                <div className="form-row">
                                <h1 className='center'> Contact Information </h1>
                                    <div className="form-group col-md-10">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" onChange={this.signUpChangeHandler} value={this.state.email} className="form-control" id="inputEmail4" name="email" required />
                                    </div>
                                    <div className="form-group col-md-8">
                                        <label htmlFor="inputEmail4"> First Name</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.firstName} className="form-control" id="inputfirstName" name="firstName" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4"> Last Name</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.lastName} className="form-control" id="inputlastName" name="lastName" required />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputEmail4">Phone Number</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.telephone} className="form-control" id="inputtelephone" name="telephone" required />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputEmail4"> Garage Space</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.garageSpace} className="form-control" id="inputgarageSpace" name="garageSpace" required />
                                    </div>
                                    

                                <button type="submit" className="btn btn-primary center"  onSubmit={this.signUpSubmitHandler} >Submit</button>
                                </div>
                            </form >
                            <div>
                            <div/>
    

                        {/* Footer   */}
                        <br/>
                        <div className="w3-row w3-section">
                            <div className="w3-third w3-container w3-black w3-large" style={{ height: '250px' }}>
                                <h2>Contact Info</h2>
                                <p><i className="fa fa-map-marker" style={{ width: '30px' }}></i> Chicago, US</p>
                                <p><i className="fa fa-phone" style={{ width: '30px' }}></i> Phone: +00 151515</p>
                                <p><i className="fa fa-envelope" style={{ width: '30px' }}> </i> Email: mail@mail.com</p>
                            </div>
                            <div className="w3-third w3-center w3-large w3-dark-grey w3-text-white" style={{ height: '250px' }}>
                                <h2>Contact Us</h2>
                                <p>If you have an idea.</p>
                                <p>What are you waiting for?</p>
                            </div>
                            <div className="w3-third w3-center w3-large w3-grey w3-text-white" style={{ height: '250px' }}>
                                <h2>Like Us</h2>
                                <i className="w3-xlarge fa fa-facebook-official"></i><br />
                                <i className="w3-xlarge fa fa-pinterest-p"></i><br />
                                <i className="w3-xlarge fa fa-twitter"></i><br />
                                <i className="w3-xlarge fa fa-flickr"></i><br />
                                <i className="w3-xlarge fa fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            



            </React.Fragment>
        );
    }
}

export default SignUp;