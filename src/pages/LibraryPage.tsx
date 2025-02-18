import React from 'react';
import '../styles/LibraryPage.css';
import Book from '../components/Book';

const LibraryPage = () => {
  return (
    <div className="library">
        <div className="inner">
            <div className="book glow"></div>
            <img src={"library-bg.jpg"} height="2848" width="4288" className="img" alt='library' />
        </div>

        <div className="bookshelf">
          <Book />
        </div>
    </div>
  );
}

export default LibraryPage;