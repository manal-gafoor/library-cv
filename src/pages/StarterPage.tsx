import React, { useEffect } from 'react';
import '../styles/StarterPage.scss';

const StarterPage = () => {
  useEffect(() => {
    if(window.innerWidth < 768) {
      setTimeout(() => {
        window.location.href = " https://manal-gafoor.github.io/cv/";
      }, 8000);
    }
  }, []);

  return (
    <div className="start-page">
      <h1>Hello! I'm Manal Gafoor,</h1>
      <h3>Writer by Passion, Front-End Developer by Profession</h3>

      {
        window.innerWidth < 768 ?
        <p>I see you're on your smartphone!
          I shall redirect you to my page that is better 
          suited for it!
        </p> 
        :
        <p>Let me take you to my library!</p>
      }
    </div>
  );
}

export default StarterPage;