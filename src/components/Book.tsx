import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import '../styles/Book.css';
import HTMLFlipBook from "react-pageflip";
import FrontCover from "./FrontCover";
import AboutMe from "./AboutMe";
import BackCover from "./BackCover";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import SkillsContd from "./SkillsContd";

function Book({ openBook, props } : { openBook: Function, props?: any}) {
  const initialRef: any = null;
  const book = React.useRef(initialRef);
 
    return (  
      <div className="open-book">
        <HTMLFlipBook width={window.innerWidth > 700 ? 450 : 180} 
        height={window.innerWidth > 700 ? 650 : 250} 
        showCover={true} {...props} ref={book}>
          <div className="page cover">
            <div className="display-center">
              <div className="border">
                <h1><u><i>Curriculum Vitae</i></u></h1>
              </div>
            </div>
          </div>

          <div className="page cover display-center"></div>

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
            <SkillsContd />
            <p className="pg-num">5</p>
          </div>

          <div className="page">
            <Education />
            <p className="pg-num">6</p>
          </div>

          <div className="page">
            <BackCover />
            <p className="pg-num">7</p>
          </div>

          <div className="page cover">
            <p className="put-back" 
              onClick={() => { openBook()}}
            >
              Put me back on the shelf!
            </p>
          </div>
        </HTMLFlipBook>
      </div>
      
    );
}

export default Book;