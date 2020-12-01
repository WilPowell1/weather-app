import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import ForecastDetails from './components/forecast-details';
import ErrorMessage from './components/error';
import SearchForm from './components/search';
import './styles/app.css';


const App = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [forecasts, setForecasts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState({ city:"", country:"" });
  const [errorMessage, setErrorMessage] = useState(false);
  /*const [bgColour, setBgColour] = useState("#fafafa");*/

  useEffect(() => {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=')
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
            setErrorMessage('cannot be found')
        } else {
            setErrorMessage('Server error')
        }
    })
}

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  /*const appStyles = {
    height: "100vh",
    background: `${bgColour}`,
  };

  const styles = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid black",
    color: "white",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#c83f49",
  };*/

    return (
      <div /*style={appStyles}*/ >
        <SearchForm
          onSearch={searchCity}
          searchText={searchText}
          setSearchText={setSearchText}/>
          {errorMessage && (<ErrorMessage errorMessage={errorMessage}/>)} 
        <LocationDetails
          city={location.city}
          country={location.country}/>
        <ForecastSummaries
          /*style={styles}
          onMouseEvent={setBgColour}*/
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}/>
          {
          selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
          }
      </div>
    )
};

export default App;
