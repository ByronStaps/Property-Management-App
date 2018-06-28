import React from 'react';
import pic1 from '../../Images/pic1.jpg'
import pic2 from '../../Images/pic2.jpg'


//Skeleton for a functional Components, nothing is going to Change on the website page.
const aboutUs = (props) =>{


    return(
      

      <div>
        <br/>
        <br/>


<div className="w3-content"  style={{ 'maxWidth':'1200px'}}>

<div className="w3-panel">
</div>
 {/* First Grid: Logo & About   */}
<div className="w3-row">
<div className="w3-half w3-container">
  <h1 className="w3-xxlarge w3-text-light-grey">ONE_TEAM</h1>
  <h1 className="w3-xxlarge w3-text-grey">ONE_MIND</h1>
  <h1 className="w3-jumbo">ABOUT_US</h1>
</div>
<div className=" w3-container w3-xlarge w3-text-grey">
<p>Don Eaton, founder of Eaton Properties, started his career 40 years ago as a Real Estate sales agent in the St. Louis / St. Charles area. His commitment to hard work, his respect for people, and his strong business ethics propelled him to become one of the top agents in his office. He achieved Million Dollar Club status year after year, while at the same time maintaining a full time career as a School Teacher.</p>
<p>Don and his wife Cindy, an executive with a national non- profit organization and also a real estate agent, continued to expand their real estate knowledge as they branched out into the investment side of the industry. Like many others the Eatons were fearful of the risk and responsibilities of owning properties but they took the leap and in a very short period of time had developed a very successful and profitable real estate investment business.</p>
<p>As their investments grew, they developed a management system to handle their own properties. Their system was so successful soon they were being asked to manage property for others.</p>
<p>In 2000, Don and Cindy took the same principals of hard work, business ethics, and respect for people that had guided them to success as sales agents and as investors, and launched their own company, Eaton Properties. Eaton Properties is a full service real estate company licensed by the state of Missouri and governed by the laws and statutes of the state.</p>
<p>Eaton Properties has continued to grow and has become a premier sales and property management company in the St. Louis / St. Charles area, and has even gained a national reputation. Eaton Properties services clients from all over the United States and many foreign countries. But despite their amazing success and achievement, what you will notice most about Eaton Properties is the friendly, personal, family way you are treated. Whether you are interested in renting, selling, or management services, Eaton Properties is waiting to guide you on your journey.</p>
</div>
</div>



 {/* Footer   */}
<div className="w3-row w3-section">
  <div className="w3-third w3-container w3-black w3-large" style={{height:'250px'}}>
    <h2>Contact Info</h2>
    <p><i className="fa fa-map-marker" style={{width:'30px'}}></i> Chicago, US</p>
    <p><i className="fa fa-phone" style={{width:'30px'}}></i> Phone: +00 151515</p>
    <p><i className="fa fa-envelope" style={{width:'30px'}}> </i> Email: mail@mail.com</p>
  </div>
  <div className="w3-third w3-center w3-large w3-dark-grey w3-text-white" style={{height:'250px'}}>
    <h2>Contact Us</h2>
    <p>If you have an idea.</p>
    <p>What are you waiting for?</p>
  </div>
  <div className="w3-third w3-center w3-large w3-grey w3-text-white" style={{height:'250px'}}>
    <h2>Like Us</h2>
    <i className="w3-xlarge fa fa-facebook-official"></i><br/>
    <i className="w3-xlarge fa fa-pinterest-p"></i><br/>
    <i className="w3-xlarge fa fa-twitter"></i><br/>
    <i className="w3-xlarge fa fa-flickr"></i><br/>
    <i className="w3-xlarge fa fa-linkedin"></i>
  </div>
</div>
<div className="w3-container w3-text-grey">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</div>


</div>
</div>



    );
}


export default aboutUs;