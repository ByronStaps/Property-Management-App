import React from 'react';
import pic1 from '../../Images/pic1.jpg'
import pic12 from '../../Images/pic12.jpg'


//Skeleton for a functional Components, nothing is going to Change on the website page.
const aboutUs = (props) =>{


    return(
      

      <div className="w3-content" style={{ 'max-width': '1200px' }}>
            {/* First Grid: Logo & About   */}
            <div className="w3-row">
                <div className="w3-half w3-container">
                    <h1 className="w3-xxlarge w3-text-light-grey">One Mind</h1>
                    <h1 className="w3-xxlarge w3-text-grey">One Team</h1>
                    <h1 className="w3-jumbo">About Us</h1>
                </div>
                <div className="w3-half w3-container w3-xlarge w3-text-grey">
                <h2 className="zx"> About Us </h2>
                <p>Don Eaton, founder of Eaton Properties, started his career 40 years ago as a Real Estate sales agent in the St. Louis / St. Charles area. His commitment to hard work, his respect for people, and his strong business ethics propelled him to become one of the top agents in his office. He achieved Million Dollar Club status year after year, while at the same time maintaining a full time career as a School Teacher.</p>
                </div>
            </div>

            {/* Second Grid: Resent   */}
            <div className="bodyfontstyle">
                <h4>MEET OUR TEAM:</h4>
            </div>
            <div className="w3-row">
                <div className="w3-half w3-container w3-xlarge w3-text-grey">
                    <img src={pic12} style={{ width: '100%' }}  alt="Team"/>

                    <p>In 2000, Don and Cindy took the same principals of hard work, business ethics, and respect for people that had guided them to success as sales agents and as investors, and launched their own company, Eaton Properties. Eaton Properties is a full service real estate company licensed by the state of Missouri and governed by the laws and statutes of the state.</p>

                </div>
                <div className="w3-half w3-container">
                    <img src={pic1} style={{ width: '100%' }} alt="Me" />
                </div>

                 <br/>

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



    );
}


export default aboutUs;