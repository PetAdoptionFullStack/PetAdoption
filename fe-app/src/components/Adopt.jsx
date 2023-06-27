import React, { useState } from 'react';
import axios from 'axios';

const PetAdoptionForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a POST request to the server to submit the adoption details
      const response = await axios.post('/api/pets/adoption', {
        name,
        age,
        breed,
      });
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
    <div>
      <h2>Adopt a Pet</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />

        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          id="breed"
          value={breed}
          onChange={(event) => setBreed(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PetAdoptionForm;