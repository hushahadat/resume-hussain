import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import IMG6 from "../../assets/profile-1.jpg";

const Services = () => {
  return (
    <section id="services">
      {/* <h5>What I Offer</h5> */}
      

      <div className="container services_container">
        <div className="img" >
      
          <img src={IMG6} style={{borderRadius : '360px',aspectRatio : '1/1'}}/>
        </div>

       

        <div className="data-container">
        <h2 style={{marginBottom:"2rem", color:"rgba(255, 255, 255, 0.6)"}}>Basic Details</h2>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Education" >
              <div className="tab-con">
              <ul>
                <li><span> <h6>2018-2022</h6> </span> <h5>BE From Sapthagiri College Of Engineering</h5></li>
                <li> <span><h6>2008-2018 </h6></span> <h5>Intermediate & Matriculation from R.V.S Academy</h5></li>
              </ul>
              </div>
              
            </Tab>
            <Tab eventKey="profile" title="WORK EXPERIENCE">
            <div className="tab-con">
              
              <ul>
                <li> <span> <h6>Aug 2022 - Present </h6></span> <h5> Assosiate Software Engineer at SignDesk</h5></li>
                <li> <span> <h6>April 2022 - June 2022 </h6></span>  <h5>Web Developer Intern at SignDesk</h5></li>
                <li> <span> <h6>Sep 2020 - Oct 2020 </h6></span>  <h5>Internship at Mihira Tech</h5></li>
              </ul>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
