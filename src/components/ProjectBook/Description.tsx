import React from "react";
import "../../styles/ProjectPages.scss";

const Description = ({ keyy, path, title, text, vid, landscape, hover }: {
    keyy: number,
    path: string,
    title: string,
    text: string,
    vid: boolean,
    landscape: boolean,
    hover: boolean
}) => {
    return ( 
        <div className={`each-project ${path === "" ? "justify-center" : ""} ${keyy % 2 === 0 ? "shadow" : ""}`}>
            { !vid && path && <img src={path} alt="project" 
                className={`project-image ${hover ? "hover" : ""} 
                ${ !landscape ? "landscape" : ""}`}></img>}
            { vid && 
            <div className="video-container">
                <video src={path} muted autoPlay loop></video>
            </div>
            }
            <h6><u>{title}</u></h6>
            <p dangerouslySetInnerHTML={{ __html: text }} ></p>
        </div>
     );
}
 
export default Description;
