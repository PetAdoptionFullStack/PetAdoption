import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

export default function NewAdoption() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const breedsList = () => {
        axios.get("localhost:8080/api/get-breeds").then(response => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
        
    }

    breedsList();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to the server to submit the adoption details
            const response = await axios.post('http://localhost:8080/pets/new-adoption', {
                name,
                age,
                breed,
            })
            setSuccessMessage(response.data.message);
            setName('');
            setAge('');
            setBreed('');
        } catch (error) {
            setErrorMessage('Failed to submit the adoption details. Please try again later.');
            console.error(error);
        }
    };

  return (
    <>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="text"
                        id="age"
                        value={age}
                        onChange={(event) => setAge(event.target.value)} />
                </div>
                <div className="input-field">
                    <label htmlFor="breed">Breed:</label>
                    <input
                        type="text"
                        id="breed"
                        value={breed}
                        onChange={(event) => setBreed(event.target.value)} />
                        <Select
                            options={null}
                            className="options"
                            onChange={null}
                            value={null}
                        />
                    
                </div>
                    <button type="submit">Submit</button>
            </form>
        </div>
    </>
  )
}
