import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import '../styles/forecast-summary.css';
import moment from 'moment';

const ForecastSummary = (props) => {

  return (
    <div className="forecast-summary" 
      onMouseEnter={() => props.setBgColour(props.forecastHover)}
      onMouseLeave={() => props.setBgColour("linear-gradient(90deg, rgb(82, 120, 151) 0%, rgb(206, 223, 230)35%)")} >
        <div className="date" data-testid="date-id">
          {moment(props.date).format("dddd Do MMM")}       
        </div>
        <div className="icon" data-testid="icon-id">
          <WeatherIcon name="owm" iconId={props.icon} />
        </div> 
        <div className="description" data-testid="description-id">
          {props.description}
        </div>
        <div className="temperature" data-testid="temperature-id">
          {props.temperature}°
        </div>
        <button className="more-details" onClick={() => props.onSelect(props.date)}>more details</button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number,
    temperature: PropTypes.any,
    description: PropTypes.string,
    icon: PropTypes.any,
    onSelect: PropTypes.func
};

export default ForecastSummary;