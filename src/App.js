import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import './styles/app.css';
import './styles/forecast-summaries.css';
import ForecastDetails from './components/forecast-details';
import ErrorMessage from './components/error';
import searchForm from './components/search';

const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState({ city:"", country:"" });
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Llangollen')
    .then(res => {
        setLocation(res.data.location)
        setForecasts(res.data.forecasts)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

const searchCity = () => {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`)
    .then((res) => {
        setLocation(res.data.location)
        setForecasts(res.data.forecasts)
    })
    .catch(err => {
        if(err.response.status === 404) {
            setErrorMessage('can not be found')
        } else {
            setErrorMessage('Server error')
        }
    })
}

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

    return (
      <div>
        <LocationDetails
          city={location.city}
          country={location.country}/>
        <ForecastSummaries 
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}/>
          {
          selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
          }
          {errorMessage && (<ErrorMessage errorMessage={errorMessage}/>)}
        <searchForm
          onSearch={searchCity}
          searchText={searchText}
          setSearchText={setSearchText}/>
      </div>
    )
};

export default App;
