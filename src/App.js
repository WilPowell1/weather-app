import React, { useState, useEffect } from 'react';
import axios from 'axios';
/*import {createGlobalStyle} from 'styled-components';*/
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
  /*const [bgColour, setBgColour] = useState({ backgroundColor: "linear-gradient(90deg, rgb(82, 120, 151) 0%, rgb(206, 223, 230)35%)" });*/

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
  
  /*styled component*/

  /*const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    body {
      font-family: Roboto;
      margin: 0;
      padding: 0;
      background: ${bgColour};
  }`;*/
  

  /*const forecastHover = (res) => {
    const clouds = res.data.forecasts.clouds;
    const rain = res.data.forecasts.rain;
    const snow = res.data.forecasts.snow;
    const clear = res.data.forecasts.clear;

    if (clouds === setForecasts(res.data.forecasts))          return setBgColour({ backgroundColor: "#fafafa" });
    else if (rain === setForecasts(res.data.forecasts))       return setBgColour({ backgroundColor: "#fa345f" });
    else if (snow === setForecasts(res.data.forecasts))       return setBgColour({ backgroundColor: "#fafafa" });
    else if (clear === setForecasts(res.data.forecasts))        return setBgColour({ backgroundColor: "#fafafa" });
    else 
      return setBgColour({ backgroundColor: "#fafafa" });
  };*/

    return (
      <div>
        <SearchForm
          setErrorMessage={setErrorMessage}
          onSearch={searchCity}
          searchText={searchText}
          setSearchText={setSearchText}/>
          {errorMessage && (<ErrorMessage errorMessage={errorMessage}/>)} 
        <LocationDetails
          city={location.city}
          country={location.country}/>
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}/*setBgColour={setBgColour}
          forecastHover={forecastHover}*//>
          {
          selectedForecast && (<ForecastDetails
          forecast={selectedForecast} />)
          }
      </div>
    )
};

export default App;
