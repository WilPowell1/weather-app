import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import LocationDetails from './components/location-details';
import ForecastSummaries from './components/forecast-summaries';
import './styles/app.css';
import './styles/forecast-summaries.css';
import ForecastDetails from './components/forecast-details';

const App = props => {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);

  const selectedForecast = props.forecasts.find(forecast => forecast.date === selectedDate);

    return (

      <LocationDetails
        city={props.location.city}
        country={props.location.country}
      />
      <ForecastSummaries forecasts={props.forecasts} />
      <ForecastDetails forecast={props.forecasts[0]} />
      
    )
}

const handleForecastSelect = (date) => {
  setSelectedDate(date);
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
