import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State, City } from 'country-state-city';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export default function Form() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("")
  const [selectedState, setSelectedState] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(countryCode);
  const cities = City.getCitiesOfState(countryCode, stateCode);

  const handleCountryChange = (selectedOption) => {
    setCountryCode(selectedOption.value);
    setSelectedCountry(selectedOption);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption.value);
    setStateCode(selectedOption.value);
  }

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.label);
  }

  const handleSubmit = (event) =>{
    event.preventDefault(); 

    console.log(selectedCountry, selectedState, selectedCity)

    const locationData = {
      country: selectedCountry.label,
      state: selectedState,
      city: selectedCity
    }

    axios.post("http://localhost:8080/users/submit", locationData)
    .then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <h3 className="my-header">Let's get you started. Enter your location</h3>
      <section className="getting-started">
        <form onSubmit={handleSubmit}>
          <Select
            options={countries.map((country) => ({
              value: country.isoCode,
              label: country.name,
            }))}
            className="options"
            onChange={handleCountryChange}
            value={selectedCountry}
          />

          {selectedCountry && (
            <Select
            options = {states.map((state) => ({
              value: state.isoCode,
              label: state.name
            }))}
            className="options"
            onChange={handleStateChange}
            />
          )}

          {selectedState && (
            <Select
            options = {cities.map((city) => ({
              value: city.isoCode,
              label: city.name
            }))}
            className="options"
            onChange={handleCityChange}
            />
          )}

            <Button variant="outline-secondary" className="my-btn" type="submit">
                Search
            </Button>

        </form>
      </section>
    </>
  );
}