import React, { useEffect, useState } from 'react';
import '../styles/LibraryPage.css';
import Book from '../components/Book';

const LibraryPage = () => {
  const [isOpened, setIsOpened] = useState(false);
   const open = React.useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      open.current?.classList.remove("animated-closing");
      open.current?.classList.add("animated-opening");
    }, [isOpened]);

    const openBook = () => {
      if(isOpened) {
        open.current?.classList.remove("animated-opening");
        open.current?.classList.add("animated-closing");
        setTimeout(() => {
          setIsOpened(false);
        }, 2800); 
      }
    }

  return (
    <div className="library">
        <div className="inner">
            <div className={`book ${ !isOpened ? "glow" : ""}`}
            onClick={() => setIsOpened(true)}></div>
            <img src={"library-bg.jpg"} height="2848" width="4288" className="img" alt='library' />
        </div>

        { isOpened && 
          <div className="bookshelf" ref={open}>
            <Book openBook={openBook} />
          </div>
        }
    </div>
  );
}

export default LibraryPage;