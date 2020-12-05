import React from 'react';
import PropTypes from 'prop-types';
import '../styles/error.css';

const ErrorMessage = (props) => {
  return (
    <div data-testid="errorId" className="error-message">
      {props.errorMessage}
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorMessage;
