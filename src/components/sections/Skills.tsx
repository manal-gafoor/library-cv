import React from "react";
import { frontEnd, backEnd, versionControl, designTools } from "../../data";
import '../../styles/Pages.scss';


const Skills = () => {
    return ( 
        <div className="page-container">
            <h1 className="experience-title"
            style={{ marginTop: "-53px" }}>
                <u>My Skills</u>
            </h1>

            <div className="skills-container">
                <div className="skills">
                    <div className="skill">
                        <h4><u>Front-End Technologies:</u></h4>
                        { frontEnd.map((item, index) => {
                            return (
                                <div key={index} className="row">
                                    <div><img src={ "./skills/" + item.icon }></img></div>
                                    <p>{ item.name }</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="skills">
                    <div className="skill">
                        <h4><u>Back-End Technologies:</u></h4>
                        {
                            backEnd.map((item, index) => {
                                return (
                                    <div key={index} className="row">
                                        <div><img src={ "./skills/" + item.icon }></img></div>
                                        <p>{ item.name }</p>
                                    </div>
                                )
                            })
                        }   
                    </div>   
                </div>

                <div className="skills">
                    <div className="skill">
                        <h4><u>Version Control:</u></h4>
                        {
                            versionControl.map((item, index) => {
                                return (
                                    <div key={index} className="row">
                                        <div><img src={ "./skills/" + item.icon }></img></div>
                                        <p>{ item.name }</p>
                                    </div>
                                )
                            })
                        }   
                    </div>
                </div>

                <div className="skills">
                    <div className="skill">
                        <h4><u>UX/UI Design Tools:</u></h4>
                        {
                            designTools.map((item, index) => {
                                return (
                                    <div key={index} className="row">
                                        <div><img src={ "./skills/" + item.icon }></img></div>
                                        <p>{ item.name }</p>
                                    </div>
                                )
                            })
                        }   
                    </div>
                </div>
            </div>
    </div>
    );
}
 
export default Skills;