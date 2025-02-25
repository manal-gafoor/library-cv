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
                            <p>In February 2024, I delivered my debut speech in front of 550+ people
                                in the Reframe Women in Tech Conference in Manchester!
                            </p>
                        </div>
                        <img src="./reframe.jpg"></img>
                    </div>  
                </div>

                <div className="parchment-holder bottom">
                    <img src="./p5.webp" alt="parchment paper" className="parchment" />
                    <div className="achieve">
                        <div className="descript">
                            <p>And in November 2024, I achieved my dream of 25 years to publish
                            my first piece of fiction titled, 'The Road Up North'!
                            </p>
                            <h6><u>Published first book!</u></h6>
                        </div>
                        <img src="./book.jpeg"></img>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Achievements;