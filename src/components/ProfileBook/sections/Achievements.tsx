import React from "react";

const Achievements = () => {
    return ( 
        <div className="page-container no-shadow">
            <h1 className="experience-title" style={{ marginTop: "0px" }}><u>Achievements</u></h1>

            <div className="achievements-card">
                <div className="parchment-holder">
                    <img src="./p5.webp" alt="parchment paper" className="parchment" />
                    <div className="achieve">
                        <div className="descript">
                            <h6><u>Opening Keynote Speech!</u></h6>
                            <p>In February 2024, I delivered my debut speech in front of <span>550+</span> people
                                in the <span>Reframe Women in Tech</span> Conference in Manchester!
                            </p>
                        </div>
                        <img src="./reframe.jpg" alt="on-stage"></img>
                    </div>  
                </div>

                <div className="parchment-holder bottom">
                    <img src="./p5.webp" alt="parchment paper" className="parchment" />
                    <div className="achieve" style={{ right: "0" }}>
                        <img src="./book.jpeg" alt="first-book"></img>
                        <div className="descript">
                            <p>And in November 2024, I achieved my lifelong dream to publish
                            my first piece of fiction titled, <span>'The Road Up North'</span>!
                            </p>
                            <h6><u>Published first book!</u></h6>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Achievements;