import React from 'react';
import pic1 from '../../Images/pic1.jpg';
import pic2 from '../../Images/pic2.jpg';
import pic4 from '../../Images/pic4.jpg';
import pic5 from '../../Images/pic5.jpg';
import pic6 from '../../Images/pic6.jpg';
import pic7 from '../../Images/pic7.jpg';

const home = (props) =>{

    return(
      
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="first-slide" src={pic7} style={{width:'100%'}} alt="First slide"/>
            <div className="container">
              <div className="carousel-caption text-" align="center">
                <h1>Example headline.</h1>
                <p></p>
                <p><a className="btn btn-lg btn-primary" href="/sign-up" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          </div>
          <br/>
          <br/>
          <br/>

           <div className="row">
           <div className="col-sm-4">
             <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" styles="width:100%" alt="Image"/>
               <p>Current Project</p>
             </div>
             <div className="col-sm-4">
               <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" styles="width:100%" alt="Image"/>
                 <p>Project 2</p>
               </div>
               <div className="col-sm-4">
               <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" styles="width:100%" alt="Image"/>
                 <p>Project 2</p>
               </div>
               <div className="col-sm-4">
              
               </div>
                </div> 
           <br/>
           <br/>


<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
    <p className="lead">
This is where you'll find a home unlike any other. Central, yet secluded, this is a place where past history meets a bright future, creating a unique character defined by venerable landmarks, refreshing spaces and a neighborhood alive with optimism and activity.</p>
  </div>
  <div className="col-md-5">
    <img className="featurette-image img-fluid mx-auto"  src={pic5} style={{width:'100%'}} alt="Generic placeholder image"/>
  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7 order-md-2">
    <h2 className="featurette-heading"> Downtown St.Louis <span className="text-muted">Visit Us.</span></h2>
    <p className="lead"> The genesis and development of the historic Arcade Apartments renovation project – a jewel of the city’s downtown revitalization strategy – is the result of Dominium’s collaboration with many area groups and organizations including the city, Webster University, and Downtown St. Louis, Inc.</p>
    <br/>
<p className="lead">
Amid a very dynamic downtown regeneration, The Arcade joins – in the most recent round of revitalization efforts – other noteworthy undertakings like the The National Blues Museum and the CityArchRiver project </p>
  </div>
  <div className="col-md-5 order-md-1">
    <img className="featurette-image img-fluid mx-auto" src={pic6} style={{width:'100%'}} alt="Generic placeholder image"/>
  </div>
</div>

<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">STEP INTO A WORLD OF INSPIRATION <span className="text-muted">See for yourself.</span></h2>
    <p className="lead">
As a resident you will be encircled with inspired artwork created by those who live in the community and you will enjoy access to more than 11,000 square feet of shared studio spaces. Artwork will be installed throughout the building’s common areas and marble-lined hallways along with artist lounge and galleries located on various floors. These galleries offer residents the opportunity to showcase their talents and inspire others with their creations.</p>
  </div>
  <div className="col-md-5">
    <img className="featurette-image img-fluid mx-auto" src={pic4} style={{width:'100%'}} alt="Generic placeholder image"/>
  </div>
</div>


     <br/>
     <br/>  
     <br/>   
      <br/>  
<br/> 
<br/>  
<br/>   
          <div className="w3-row w3-section">
          <div className="w3-third w3-container w3-red w3-large" style={{height:'250px'}}>
            <h2>Contact Info</h2>
            <p><i className="fa fa-map-marker" style={{width:'30px'}}></i> St Louis, MIssouri</p>
            <p><i className="fa fa-phone" style={{width:'30px'}}></i> Phone:909-257-1763 </p>
            <p><i className="fa fa-envelope" style={{width:'30px'}}> </i> Email: ByronStaples@mail.com</p>
          </div>
          <div className="w3-third w3-center w3-large w3-red w3-text-white" style={{height:'250px'}}>
            <h2>Contact Us</h2>
            <p>Have a Property?.</p>
            <p>What are you waiting for?</p>
          </div>
          <div className="w3-third w3-center w3-large w3-red w3-text-white" style={{height:'250px'}}>
            <h2>Like Us</h2>
            <i className="w3-xlarge fa fa-facebook-official"></i><br/>
            <i className="w3-xlarge fa fa-pinterest-p"></i><br/>
            <i className="w3-xlarge fa fa-twitter"></i><br/>
            <i className="w3-xlarge fa fa-flickr"></i><br/>
            <i className="w3-xlarge fa fa-linkedin"></i>
          </div>
        </div>
        </div>
              





        
        
          
                              



    );

}

export default home;