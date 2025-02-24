import React from "react";
import '../styles/BackCover.css'
import Phone from "../assets/Phone";
import Email from "../assets/Email";
import Linkedin from "../assets/Linkedin";
import Location from "../assets/Location";
import Web from "../assets/Web";

const BackCover = () => {
    return ( 
        <div className="page-container no-shadow">
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
 
export default BackCover;