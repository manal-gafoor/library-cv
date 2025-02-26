import React, { useRef } from "react";
import "../../styles/ProjectPages.scss";

const Description = ({ path, title, text, vid, landscape, hover }: {
    path: string,
    title: string,
    text: string,
    vid: boolean,
    landscape: boolean,
    hover: boolean
}) => {
    const vidRef = useRef<HTMLVideoElement>(null);
    return ( 
        <div className="each-project">
            { !vid && <img src={path} alt="project" 
                className={`project-image ${hover ? "hover" : ""} 
                ${ !landscape ? "landscape" : ""}`}></img>}
            { vid && 
            <div className="video-container">
                <video src={path} muted ref={vidRef}></video>
                <img src="./projects/play.svg" alt="play" className="play"></img>
            </div>
            }
            <h6><u>{title}</u></h6>
        </div>
     );
}
 
export default Description;
