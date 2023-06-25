import React from 'react';

import pets from '../img/pets.jpeg';
import dogImg from '../img/dog-img.png';
import catImg from '../img/cat-img.png';
import hamsterImg from '../img/hamster-img.png';


export default function PetImages() {

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

    </>
  );
}