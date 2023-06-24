import React from 'react';
import Button from 'react-bootstrap/Button';

import pets from '../img/pets.jpeg';
import dogImg from '../img/dog-img.png';
import catImg from '../img/cat-img.png'
import hamsterImg from '../img/hamster-img.png'


export default function Body() {

  return (
    <>
      <div className="img-container">
          <img src={pets} alt="3 dogs" />
      </div>
      <div className="line"></div>

      <section className="adopt-links">
        <div className="animal-img">
          <img src={dogImg} id="dog" alt="Dog"/>
        </div>
        <div className="animal-img">
          <img src={catImg} id="cat" alt="Cat"/>
        </div>
        <div className="animal-img">
          <img src={hamsterImg} id="hamster" alt="Hamster"/>
        </div>
      </section>

      <section className="getting-started">
        <h1>Lets get you started</h1>
        
        <form action="">
          <input type="text"/>
          <input type="text"/>
          <Button variant="outline-secondary" className= "my-btn">Seartch</Button>
        </form>

      </section>

    </>
  );
}