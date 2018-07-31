// Created a Functional Component to display the Header and SignUp Component
import{Route, Redirect} from 'react-router-dom';
import React, {Component} from 'react';
import Header from '../Header/Header';
import SignUp from  '../SignUp/SignUp';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ThankYou from '../Thank You/Thankyou';


class Layout extends Component {
 state={
     
isUserLoggedIn: false,
user:[]
 }

 //Change variable name from event to isValidUser
 SignInSubmitHandler=(isValidUser,user) => {

    this.setState({
        isUserLoggedIn: isValidUser,  
        user:user 
    });

 }
render(){


    let routes = (
            <React.Fragment>        
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/thankYou" component={ThankYou}/>

            </React.Fragment>
    );
    if(this.state.isUserLoggedIn){
     
     routes=(         

            <React.Fragment>
        <Route exact strict path="/profile"  render={() => <Profile user={this.state.user} />}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/home" component={Home}/>
           </React.Fragment>
     )
    }
    return(
            <React.Fragment>
        <Header isUserLoggedIn={this.state.isUserLoggedIn} submitHandler={this.SignInSubmitHandler}/>
        {routes}
            </React.Fragment>
    );

}

}

export default Layout;