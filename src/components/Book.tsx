import React, { useRef } from "react";
import '../styles/Book.css';
import HTMLFlipBook from "react-pageflip";
import FrontCover from "./FrontCover";
import AboutMe from "./AboutMe";
import BackCover from "./BackCover";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";

function Book(props: any) {
  const initialRef: any = null;
  const book = React.useRef(initialRef);

    return (  
      <div className="open-book">
          <HTMLFlipBook width={450} height={650} showCover={true} {...props} ref={book}>
              <div className="page">
                <FrontCover book={book} />
              </div>

              <div className="page">
                <AboutMe />
                <p className="pg-num">2</p>
              </div>

              <div className="page">
                <Experience />
                <p className="pg-num">3</p>
              </div>

              <div className="page">
                <Skills />
                <p className="pg-num">4</p>
              </div>

              <div className="page">
                <Education />
                <p className="pg-num">5</p>
              </div>
{/* 
              <div className="page"><p className="pg-num">6</p></div>

              <div className="page"><p className="pg-num">7</p></div> */}

              <div className="page">
                <BackCover />
                <p className="pg-num">6</p>
              </div>
          </HTMLFlipBook>
      </div>
      
    );
}

export default Book;