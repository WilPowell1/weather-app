import React from 'react';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.css';
import PropTypes from 'prop-types';

const ForecastSummaries = props => (
  <div className="forecast-summaries">
    {
      props.forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          onSelect={forecast.onForecastSelect}
        />
      ))
    }
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  onForecastSelect: PropTypes.func
}

export default ForecastSummaries;
