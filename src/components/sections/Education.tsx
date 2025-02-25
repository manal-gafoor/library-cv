import React from "react";

const Education = () => {
    return ( 
        <div className="page-container">
            <h1 className="experience-title"><u>Education</u></h1>
            <div className="education" style={{ padding: "0 50px" }}>
                <p>BACHELOR OF TECHNOLOGY in COMPUTER SCIENCE ENGINEERING<br></br>
                <span>University of Calicut, India </span></p>
            </div>
            

            <h1 className="experience-title" style={{ marginTop: "40px" }}><u>Certifications</u></h1>
            <div className="education certifications">
                <p>Angular - The Complete Guide<br></br>
                <span>Udemy  •  2023</span></p>

                <p>The Complete 2022 Web Development Bootcamp<br></br>
                <span>Udemy  •  2021 </span></p>

                <p>The Complete Python Pro Bootcamp<br></br>
                <span>Udemy  •  2021 </span></p>

                <p>The Complete Flutter Development Bootcamp with Dart<br></br>
                <span>Udemy  •  2020</span></p>
            </div>
        </div>
     );
}
 
export default Education;