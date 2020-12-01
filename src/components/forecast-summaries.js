import React from 'react'
import PropTypes from 'prop-types'
import ForecastSummary from './forecast-summary'
import '../styles/forecast-summaries.css'

const ForecastSummaries = props => (
    <div className='forecast-summaries' 
        onMouseEnter={() => props.setBgColour("#c83f49")}
        onMouseLeave={() => props.setBgColour("#fafafa")}
    >
        {
            props.forecasts.map(forecast => (
                <ForecastSummary
                 
                key={forecast.date}
                date={forecast.date}
                description={forecast.description}
                temperature={forecast.temperature.max}
                icon={forecast.icon}
                onSelect={props.onForecastSelect}
                />
            ))
        }
    </div>
)

ForecastSummaries.propTypes = {
    forecasts: PropTypes.array.isRequired,
    onSelect: PropTypes.func
}

export default ForecastSummaries
