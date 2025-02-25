import React from "react";

const Experience = () => {
    return ( 
        <div className="page-container no-shadow">
            <h1 className="experience-title"><u>Work Experience</u></h1>

            <div className="full-experience">
                <div className="experience">
                    <h3>Full Stack Developer</h3>
                    <p>Native Design Ltd  •  London  •  06/2022 - 01/2025</p>
                    <ul>
                        <li>Led 90% of the front-end efforts for the developers' team
                        in developing pixel-perfect web apps.</li>
                        <li>Implemented optimization techniques such as code 
                        splitting and caching to improve performance by 60%.</li>
                        <li>Collaborated with UX/UI designers on a daily basis 
                        to ensure technical feasibility</li>
                        <li>Mentored junior developers and interns, effectively fostering 
                        team spirit within the team.</li>
                    </ul>
                </div>
        
                <div className="experience">
                    <h3>Freelance Developer</h3>
                    <p>India  •  01/2020 - 06/2022</p>
                    <ul>
                        <li>Designed, developed and deployed fully functional websites, 
                        managing all aspects of SDLC from 
                        client liaison to final delivery.</li>
                        <li>Implemented responsive designs, ensuring compatibility 
                        across devices and enhancing user engagement by 66%.</li>
                        <li>Utilized Flutter and Firebase to deliver high-performance, 
                        feature-rich mobile apps with real-time database management.</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Experience;