import React from 'react';
import pets from '../img/pets.jpeg'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function Body() {

  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    setIsClicked(true)
  }

  return (
    <>
      <div className="img-container">
          <img src={pets} alt="3 dogs" />
      </div>
      <div className="line"></div>
      
      <div className="search-container">
        <h2>Find your new Best Friend here!</h2>
        <form action="">
          <input type="text"/>
          <input type="text"/>
          <Button variant="outline-secondary" className={isClicked ? 'clicked' : ''} onClick={handleClick}>Submit</Button>
        </form>
      </div>
    </>
  );
}