
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import pic3 from '../../Images/pic3.png';
import axios from 'axios';
import home from '../Home/Home';

class Header extends Component {

  state = {
    email: '',
    password: '',
    loginError: false,
    user:[]
  }

  SignInSubmitHandler = (event) => {
    //Add Logic for API call to check if the User is Valid or not
    event.preventDefault();// hides the query string from being displated on the browser;
   
   
    const userSignIn = {
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:8080/sign-in',userSignIn)
    .then( res => {
        this.props.submitHandler(true,res.data);
        console.log(res.data);
        this.setState({user:res.data});
        this.setState({loginError:false})
    }).catch(res => {
        this.props.submitHandler(false,null);
        this.setState({loginError:true})
    })

  }

  SignInChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value});
  }

  render() {
    let errorMessage  ='';
    if(this.state.loginError){
        errorMessage = "username or password is invalid";
    }
     let links= (

      <React.Fragment>

        <li className="nav-item active">
          <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/sign-up">Contact Us</NavLink>
        </li>
        <li className="nav-item active">
          <NavLink className="nav-link" to="/about-us">About Us</NavLink>
        </li>
        

      </React.Fragment>

    );

    if (this.props.isUserLoggedIn) {

      links = (
      
      <React.Fragment>

        <li className="nav-item ">
          <NavLink className="nav-link" to="/home"  >Home <span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile"> My Profile </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about-us">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink onClick={home} className="nav-link" to="/">Sign out</NavLink>
        </li>

      </React.Fragment>
      )


    }
    

    return (


      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/"> <img src={pic3} style={{width:'30%'}} alt="Home logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              {links}
            </ul>
            {/* add input fields for sign IN */}
            <div className="orangecolor">
            {errorMessage}

              </div>
            <form onSubmit={this.SignInSubmitHandler} className="form-inline mt-2 mt-md-0">
              <div className="form-group">
                <input onChange={this.SignInChangeHandler} value={this.state.email} name="email" type="text" placeholder="Email" className="form-control" />
              </div>
              <div className="form-group">
                <input onChange={this.SignInChangeHandler} value={this.state.password} name="password" type="password" placeholder="Password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-danger">Sign in</button>
            </form>
          
          </div>
        </nav>

      </div>

    );
  }

}

export default Header;