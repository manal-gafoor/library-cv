import React from "react";
import '../../styles/BackCover.scss';
import Phone from "../../assets/Phone";
import Email from "../../assets/Email";
import Linkedin from "../../assets/Linkedin";
import Location from "../../assets/Location";
import Web from "../../assets/Web";

const Contact = () => {
    return ( 
        <div className="page-container no-shadow">
            <h1 className="experience-title"><u>Contact Me!</u></h1>
            <div className="contact-box">
                <div className="each-row">
                    <Location />
                    <p>London, UK</p>
                </div>

                <div className="each-row">
                    <Phone />
                    <p>0044 7879887539</p>
                </div>

                <div className="each-row">
                    <Email />
                    <a href="mailto:manalgafoor24@gmail.com" target="_blank">manalgafoor24@gmail.com</a>
                </div>

                <div className="each-row">
                    <Linkedin />
                    <a href="https://www.linkedin.com/in/manalabdulgafoor/" target="_blank">My LinkedIn</a>
                </div>

                <div className="each-row">
                    <img src="./github.svg" alt="github"></img>
                    <a href="https://github.com/manal-gafoor" target="_blank">My GitHub</a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;