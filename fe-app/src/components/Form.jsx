import React, { useState } from 'react';
import Select from 'react-select';
import { Country, State } from 'country-state-city';
import Button from 'react-bootstrap/Button';


let countryCode = "";
export default function Form() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(countryCode)

  const handleCountryChange = (selectedOption) => {
    countryCode = selectedOption.value;
    setSelectedCountry(selectedOption);
  };

  
  return (
    <>
      <h3 className="my-header">Let's get you started. Enter your location</h3>
      <section className="getting-started">
        <form action="">
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
            onChange={handleCountryChange}
            />
          )}

            <Button variant="outline-secondary" className="my-btn">
                Search
            </Button>

        </form>
      </section>
    </>
  );
}