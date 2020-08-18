import React from 'react'
import PropTypes from 'prop-types'

const ErrorMessage = (props) => ( 
    <div data-testid='errorId'      className='error-message'>{props.errorMessage}
    </div>
)

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string
}

export default ErrorMessage;