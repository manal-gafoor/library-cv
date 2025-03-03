import React from "react";
import '../../../styles/BackCover.scss';
import Phone from "../../../assets/Phone";
import Email from "../../../assets/Email";
import Linkedin from "../../../assets/Linkedin";
import Location from "../../../assets/Location";

const Contact = () => {
    return ( 
        <div className="page-container no-shadow">
            <h1 className="experience-title"><u>Contact Me!</u></h1>
            <div className="contact-box">
                <div className="each-row">
                    <Location height={window.innerWidth > 900 ? "20px" : "13px"} />
                    <p>London, UK</p>
                </div>

                <div className="each-row">
                    <Phone height={window.innerWidth > 900 ? "20px" : "13px"} />
                    <p>0044 7879887539</p>
                </div>

                <div className="each-row">
                    <Email height={window.innerWidth > 900 ? "22px" : "12px"} />
                    <a href="mailto:manalgafoor24@gmail.com" target="_blank" rel="noopener noreferrer">manalgafoor24@gmail.com</a>
                </div>

                <div className="each-row">
                    <Linkedin height={window.innerWidth > 900 ? "20px" : "13px"} />
                    <a href="https://www.linkedin.com/in/manalabdulgafoor/" target="_blank" rel="noopener noreferrer">My LinkedIn</a>
                </div>

                <div className="each-row">
                    <img src="./github.svg" alt="github"></img>
                    <a href="https://github.com/manal-gafoor" target="_blank" rel="noopener noreferrer">My GitHub</a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;