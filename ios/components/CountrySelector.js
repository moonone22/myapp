import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {useCountry} from '../../App';

const CountrySelector = () => {
  const {isCounty, setCountry, setCountryName} = useCountry();
  const onSelect = country => {
    setCountry(country.cca2);
    setCountryName(country.name);
  };
  return (
    <CountryPicker
      countryCode={isCounty}
      withCountryNameButton={true}
      withAlphaFilter={true}
      withFilter={true}
      onSelect={onSelect}
    />
  );
};

export default CountrySelector;
