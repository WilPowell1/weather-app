import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search.css';

const SearchForm = (props) => {
    const handleInputChange = (event) => {
        props.setSearchText(event.target.value);
    }

    const resetInputField = () => {
        props.setSearchText("");
    };

    const clickSearch = () => {
        props.onSearch();
        resetInputField();
    }

    const resetErrorMessage = () => {
        props.setErrorMessage(false);
    }

    return (
        <div className="search-form">
            <input className="input" data-testid="input-id" type="text" placeholder="Search..." value={props.searchText} onChange={handleInputChange}
            onClick={resetErrorMessage} />
            
            <button className="search-button" data-testid="button-id" onClick={clickSearch}>Search</button> 
        </div>
    )
}

SearchForm.propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
    handleInputChange: PropTypes.func,
    clickSearch: PropTypes.func,
    resetInputField: PropTypes.func
}

export default SearchForm;