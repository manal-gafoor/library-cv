import React from "react";

const AboutMe = () => {
    return ( 
        <div className="page-container">
            <h1 className="experience-title" style={{ marginBottom: window.innerWidth > 900 ? "50px" : "" }}><u>About Me</u></h1>

            <div className="about-me">
                <div className="quick">
                    <p className="text">Front End Developer 💻 | Tech Enthusiast 👩🏻‍💻 </p>
                    <p className="text">Motivational Speaker 🎙️ | Published Author ✏️</p>
                    <p className="text">Lifelong Learner 👩🏻‍🎓 | Mum of Two 🥴</p>
                </div>

                <div className="overview">
                Experienced Front-End Developer, with <span>5</span> years of delivering
                 beautiful, scalable web apps using <span>React</span>, <span>React 
                 Native</span> and <span>Angular</span>. Proficient in building 
                 <span> cross-platform</span> and <span>mobile applications</span>. 
                 Adept at <span>leading teams</span>, <span>mentoring</span> juniors, 
                 and <span>collaborating</span> across UX/UI teams to deliver high
                 quality solutions. Skilled in modern frameworks and <span>agile 
                 methodologies</span> to drive digital transformation. Delivered <span>5+ </span> 
                 talks and <span>published</span> a piece of fiction in 2024. Fluent 
                 in <span>four and half</span> languages, currently learning a 6th.
                </div>
            </div>
        </div>
     );
}
 
export default AboutMe;