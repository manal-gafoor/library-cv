import React from "react";
import '../../styles/Book.css';
import HTMLFlipBook from "react-pageflip";
import Description from "./Description";
import { projectDetails } from "./data";

function ProjectBook({ openBook, props } : { openBook: Function, props?: any}) {
  const initialRef: any = null;
  const book = React.useRef(initialRef);
 
    return (  
      <div className="open-book">
        <HTMLFlipBook width={window.innerWidth > 700 ? 450 : 180} 
        height={window.innerWidth > 700 ? 650 : 250} 
        showCover={true} {...props} ref={book}>
          <div className="page cover projects">
            <div className="display-center">
              <div className="border">
                <h1><u><i>Projects</i></u></h1>
              </div>
            </div>
          </div>

          <div className="page cover projects display-center"></div>

          { projectDetails.map(proj => {
            return (
              <div className="page">
                  <Description 
                      path={proj.path} 
                      title={proj.title}
                      text={proj.text}
                      vid={proj.video}
                      landscape={proj.landscape}
                      hover={proj.hover}
                  />
                  <p className="pg-num">1</p>
              </div>
            )
          })  
          }

          {/*<div className="page">
            <Description
                vid=""
                title=""
             />
            <p className="pg-num">2</p>
          </div>

          <div className="page">
            <Description 
                img="" 
                title=""
            />
            <p className="pg-num">3</p>
          </div>

           <div className="page">
            <Description 
                img="" 
                title="Internal Dashboard"
            />
            <p className="pg-num">4</p>
          </div>

          <div className="page">
            <Description 
                img="" 
                title="Internal Dashboard"
            />
            <p className="pg-num">5</p>
          </div>

          <div className="page">
            <Description 
                img="" 
                title="Internal Dashboard"
            />
            <p className="pg-num">6</p>
          </div>

          <div className="page">
           
            <p className="pg-num">7</p>
          </div>

          <div className="page">
           
            <p className="pg-num">9</p>
          </div> */}

          <div className="page cover projects">
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

export default ProjectBook;