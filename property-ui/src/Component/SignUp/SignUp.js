import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


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

                    <div className="w3-panel">
                        <i className="w3-xlarge fa fa-bars"></i>
                    </div>
                    {/* First Grid: Logo & About   */}
                    <div className="w3-row">
                        <div className="w3-half w3-container">
                            <h1 className="w3-xxlarge w3-text-light-grey">LET US</h1>
                            <h1 className="w3-xxlarge w3-text-grey">Be YOUR</h1>
                            <h1 className="w3-jumbo">Next Home</h1>
                        </div>
                        <div className=" w3-container w3-xlarge w3-text-grey">
                            <div id="main-lt">
                                <iframe width="100px" src="https://www.youtube.com/embed/1DBHLbiJ6ls" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>        <div className="clr height25"></div>

                            </div>
                            {redirect}
                            <form onSubmit={this.signUpSubmitHandler} className="container">
                                <h1> Contact Information </h1>
                                <div className="form-row">
                                    <div className="form-group col-md-8">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" onChange={this.signUpChangeHandler} value={this.state.emailname} className="form-control" id="inputEmail4" name="email" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4"> First Name</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.firstName} className="form-control" id="inputfirstName" name="firstName" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4"> Last Name</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.lastName} className="form-control" id="inputlastName" name="lastName" required/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputEmail4">Phone Number</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.telephone} className="form-control" id="inputtelephone" name="telephone" required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4"> Garage Space</label>
                                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.garageSpace} className="form-control" id="inputgarageSpace" name="garageSpace" required/>
                                    </div>
  >
                                </div>
                                
                                <button type="submit" className="btn btn-primary alert alert-success" onSubmit={this.signUpSubmitHandler} >Submit</button>
                            </form >
                        </div>
                        {/* Footer   */}
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



            </React.Fragment>
        );
    }
}

export default SignUp;