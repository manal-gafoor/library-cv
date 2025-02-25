import React from "react";
import '../../styles/BackCover.css';
import Phone from "../../assets/Phone";
import Email from "../../assets/Email";
import Linkedin from "../../assets/Linkedin";
import Location from "../../assets/Location";
import Web from "../../assets/Web";

const Contact = () => {
    return ( 
        <div className="page-container no-shadow">
            {/* <h1 className="experience-title"><u>Other Details</u></h1> */}

            <h1 className="experience-title"><u>Contact Me!</u></h1>
            <div className="contact-box">
                <Phone />
                <Email />
                <Linkedin />
                <Location />
                <Web />
            </div>
        </div>
     );
}
 
export default Contact;