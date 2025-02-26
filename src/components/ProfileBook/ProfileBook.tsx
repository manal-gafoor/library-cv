import React from "react";
import '../../styles/Book.css';
import HTMLFlipBook from "react-pageflip";
import FrontCover from "./sections/FrontCover";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import SkillsContd from "./sections/SkillsContd";
import Achievements from "./sections/Achievements";
import Details from "./sections/Details";

function ProfileBook({ openBook, props } : { openBook: Function, props?: any}) {
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
            <Achievements />
            <p className="pg-num">7</p>
          </div>

          <div className="page">
            <Details />
            <p className="pg-num">8</p>
          </div>

          <div className="page">
            <Contact />
            <p className="pg-num">9</p>
          </div>

          <div className="page">
            <div className="page-container">
              <p>You can find details about my<br></br>
              projects in the other book!!!</p>
            </div>
          </div>

          <div className="page cover">
            <p className="put-back" 
              onClick={(e) => { e.preventDefault();  openBook() }}
            >
              Put me back on the shelf!
            </p>
          </div>
        </HTMLFlipBook>
      </div>
      
    );
}

export default ProfileBook;