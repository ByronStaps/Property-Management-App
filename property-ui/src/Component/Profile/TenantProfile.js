import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import pic1 from '../../Images/pic1.jpg';
import pic8 from '../../Images/pic8.jpg';
import axios from 'axios';
import { Helmet } from "react-helmet";
import MaintenceRequest from "../Form/MaintenceRequest"
class Profile extends Component {

  state = {
    tenant: '',

  }

  //We needd to make API calls in the method 


  componentDidMount() {
    //Matching the requirements from the controller, passing the argument
    axios.get('http://localhost:8080/findtenant',

      {
        params: {
          email: this.props.email
        }
      }

    )
      .then(response => {
        const tenants = response.data;
        console.log(this.props.email);
        console.log(response.data);
        this.setState({ tenant: tenants })
      })
  }

  render() {
    let tenantDisplay = (

      

      <div key={this.state.tenant.telephone} className="card tripform" style={{ width: "600px" }}>
        <div className="card-header">
          <h1> Hello {this.state.tenant.firstName}</h1>
        </div>
        <ul className="list-group list-group-flush">
          <h2>Email</h2>
          <li className="list-group-item">{this.state.tenant.email}</li>
          <h2>Tenant Name</h2>
          <li className="list-group-item">{this.state.tenant.firstName} {this.state.tenant.lastName}</li>
          <h2>Phone Number</h2>
          <li className="list-group-item">{this.state.tenant.telephone}</li>
          <h2>Next Payment Due <a type="button" className="btn btn-danger" href="https://www.paypal.com/uk/signin"> Pay Now </a></h2>
          <li className="list-group-item">{this.state.tenant.rentDue}</li>
          <h2>Lease Term</h2>
          <li className="list-group-item">{this.state.tenant.leaseRenew}</li>
          <h2>Maintence Request</h2>
          <li className="list-group-item"> {<MaintenceRequest/>}</li>
        </ul>
      </div>
    );
    return (

      <div className="margintop" align="center">
        <br />
        <img src={pic8} style={{width:'100%'}} alt="First slide"/>
        <br />
        <br />
        {tenantDisplay}
        <br />
        <br />
        <div align="center">
          <iframe
            width="600"
            height="450"
            frameBorder="0" style={{ width: "100%" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12466.80654775535!2d-90.2106829!3d38.6327444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7fa2c9991ac6421e!2sClaim+Academy!5e0!3m2!1sen!2sus!4v1526420917315">
          </iframe>
        </div>

      </div>





    );
  }
}


export default Profile;