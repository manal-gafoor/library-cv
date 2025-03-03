import React, { useEffect, useState } from 'react';
import '../styles/LibraryPage.scss';
import ProfileBook from '../components/ProfileBook/ProfileBook';
import ProjectBook from '../components/ProjectBook/ProjectBook';

const LibraryPage = () => {
  const [isProfileBookOpen, setIsProfileBookOpen] = useState(false);
  const [isProjectsBookOpen, setIsProjectsBookOpen] = useState(false);
  const [pointing, setPointing] = useState(true);
   const openProfile = React.useRef<HTMLDivElement>(null);
   const openProject = React.useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      openProfile.current?.classList.remove("animated-profile-closing");
      openProject.current?.classList.remove("animated-project-closing");

      openProfile.current?.classList.add("animated-profile-opening");
      openProject.current?.classList.add("animated-project-opening");

      setTimeout(() => {
        setPointing(false);
      }, 13000);
    }, [isProfileBookOpen, isProjectsBookOpen]);

    const openProfileBook = () => {
      if(isProfileBookOpen) {
        openProfile.current?.classList.remove("animated-profile-opening");
        openProfile.current?.classList.add("animated-profile-closing");
        setTimeout(() => {
          setIsProfileBookOpen(false);
        }, 2800); 
      }
    }

    const openProjectsBook = () => {
      if(isProjectsBookOpen) {
        openProject.current?.classList.remove("animated-project-opening");
        openProject.current?.classList.add("animated-project-closing");
        setTimeout(() => {
          setIsProjectsBookOpen(false);
        }, 2800); 
      }
    }

  return (
    <div className="library">
        <div className="inner">
            <div className={`book profile-book ${ !isProfileBookOpen ? "glow" : ""}`}
            onClick={() => setIsProfileBookOpen(true)}></div>

            <div className={`book project-book ${ !isProjectsBookOpen ? "glow glow2" : ""}`}
            onClick={() => setIsProjectsBookOpen(true)}></div>

            <img src={"library-bg.jpg"} height="2848" width="4288" className="img" alt='library' />
        </div>

        { isProfileBookOpen && 
          <div className="bookshelf" ref={openProfile}>
            <ProfileBook openBook={openProfileBook} />
          </div>
        }

        { isProjectsBookOpen && 
          <div className="bookshelf" ref={openProject}>
            <ProjectBook openBook={openProjectsBook} />
          </div>
        }

        <div className={`pointers-div ${ !pointing ? "invisible" : "" }`}>
          <div className="bubble bubble1">
            <h3>You can find my<br></br>profile details here!</h3>
            <img src="./arrow3.svg" alt="arrow" />
          </div>
          
          <div className="bubble">
            <h3>And my project<br></br>details here!</h3>
            <img src="./arrow3.svg" alt="arrow" />
          </div>

        </div>
    </div>
  );
}

export default LibraryPage;