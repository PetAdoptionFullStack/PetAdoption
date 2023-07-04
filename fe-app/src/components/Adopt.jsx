import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Adopt() {

    return (
        <>
            <h2>Adopt a Pet</h2>
            <div className="create-adoption-container">
                <Link id="create-adoption" to={"/create-adoption"}>Create adoption</Link>
            </div>


            <div className="pet-options-container">
                
            </div>
            
        </>
    );
}

export default Adopt;