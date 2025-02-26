import React from "react";
import '../../../styles/FrontCover.css';
import cv from '../../../assets/cv.pdf';

const FrontCover = ({book} : { book: React.RefObject<any>}) => {
    return (
        <div className="page-container no-shadow">   
            <img src="./pic.jpeg"></img>
            <h3>Manal Abdul Gafoor</h3>
            <h4>Front End Developer</h4>

            <div className="ctas">
                <a href={cv} download="ManalGafoor_CV" target="_blank" className="contact-me download-cv">
                    Download CV
                </a>

                <div className="contact-me" onClick={() => book.current!.pageFlip().flip(8)}>
                Contact Me
            </div>
            </div>
        </div>
    )
}

export default FrontCover;