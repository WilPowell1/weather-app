import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search.css';

const searchForm = (props) => {
    const handleInputChange = (event) => {
        props.setSearchText(event.target.value)

    }
    return (
        <div className="search-form">
            <input className="input" data-testid="input-id" type="text" placeholder="Search for..." value={props.searchText} onChange={handleInputChange}/>
            
            <button className="button" data-testid="button-id" onClick={props.onSearch}>search</button>
        </div>
    )
}

searchForm.propTypes = {
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
    handleInputChange: PropTypes.func
}

export default searchForm;