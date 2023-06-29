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
            <Card className='pet-option' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card className='pet-option' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card className='pet-option' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card className='pet-option' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                
            </div>
            
        </>
    );
}

export default Adopt;