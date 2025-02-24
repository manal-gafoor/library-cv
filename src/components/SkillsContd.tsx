import React from "react";
import { ideTools, versionControl,
    planning, optimization, problemSolving } from "../data";
import '../styles/Pages.scss';


const SkillsContd = () => {
    return ( 
        <div className="page-container no-shadow">
            <div className="skills-container" 
            style={{ padding: "40px 30px 0" }}>

                <div className="skills">
                    <div className="skill">
                        <h4><u>IDEs & Tools:</u></h4>
                        {
                            ideTools.map(item => {
                                return (
                                    <div className="row">
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
                        <h4><u>Soft Skills:</u></h4>
                        {
                            problemSolving.map(item => {
                                return (
                                    <div className="row">
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
                        <h4><u>Project Planning:</u></h4>
                        {
                            planning.map(item => {
                                return (
                                    <div className="row">
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
                        <h4><u>Performance Optimization:</u></h4>
                        {
                            optimization.map(item => {
                                return (
                                    <div className="row">
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
 
export default SkillsContd;