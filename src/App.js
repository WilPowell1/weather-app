import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDetails from './components/location-details';
import PropTypes from 'prop-types';

const App = props => 
  <LocationDetails 
    city={props.location.city}
    country={props.location.country}
  />

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
