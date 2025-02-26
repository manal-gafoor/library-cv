import React, { useEffect, useState } from 'react';
import '../styles/LibraryPage.scss';
import ProfileBook from '../components/ProfileBook/ProfileBook';
import ProjectBook from '../components/ProjectBook/ProjectBook';

const LibraryPage = () => {
  const [isProfileBookOpen, setIsProfileBookOpen] = useState(false);
  const [isProjectsBookOpen, setIsProjectsBookOpen] = useState(false);
   const openProfile = React.useRef<HTMLDivElement>(null);
   const openProject = React.useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      openProfile.current?.classList.remove("animated-profile-closing");
      openProject.current?.classList.remove("animated-project-closing");

      openProfile.current?.classList.add("animated-profile-opening");
      openProject.current?.classList.add("animated-project-opening");
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

            <div className={`book project-book ${ !isProjectsBookOpen ? "glow" : ""}`}
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
    </div>
  );
}

export default LibraryPage;