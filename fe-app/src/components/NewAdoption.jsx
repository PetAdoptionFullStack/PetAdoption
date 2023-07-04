import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

export default function NewAdoption() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [breedList, setBreedList] = useState([]);
    
    async function getBreeds() {
        try {
            const response = await axios.get("http://localhost:8080/pets/get-breeds");
            setBreedList(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBreeds();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Make a POST request to the server to submit the adoption details
            const response = await axios.post('http://localhost:8080/pets/new-adoption', {
                name,
                age,
                breed,
                description,
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

    const handleBreedChange = (selectedOption) => {
        setBreed(selectedOption.value);
        console.log(selectedOption.value);
    }

    return (
        <>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Pets Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="age">Age of the pet</label>
                        <input
                            type="text"
                            id="age"
                            value={age}
                            onChange={(event) => setAge(event.target.value)} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="breed">Breed of the pet</label>
                            <Select
                                options={breedList.map((breed) => ({
                                    label: breed.breed_name,
                                    value: breed.id
                                }))}
                                className="options"
                                onChange={handleBreedChange}
                                value={breed}
                            />     
                    </div>

                    <div className="input-field">
                        <label htmlFor="breed">Select type of pet</label>
                            <Select
                                options={breedList.map((breed) => ({
                                    label: breed.breed_name,
                                    value: breed.breed_name
                                }))}
                                className="options"
                                onChange={handleBreedChange}
                                value={breed}
                                required
                            />     
                    </div>
                    
                    <div className="input-field">
                        <textarea name="" id="" cols="27" rows="3" required placeholder="Description of your pet" 
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        />
                    </div>

                        <button type="submit">Submit</button>
                </form>
            </div>
        </>
  )
}