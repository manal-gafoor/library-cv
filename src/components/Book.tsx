import React, { useRef, useState } from "react";
import '../styles/Book.css';
import FlipPage from 'react-flip-page';

function Book(props: any) {

    return (  
      <div>
        <FlipPage>
          <article>
            <h1>My awesome first article</h1>
            <p>My awesome first content</p>
          </article>
          <article>
            <h1>My wonderful second article</h1>
            <p>My wonderful second content</p>
          </article>
          <article>
            <h1>My excellent third article</h1>
            <p>My excellent third content</p>
          </article>
        </FlipPage>
      </div>
      
    );
}

export default Book;