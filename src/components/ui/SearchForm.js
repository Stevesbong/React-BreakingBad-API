import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ getQueryValue }) => {
    const [ text, setText ] = useState('')

    // used onChange function to get result right away 
    const onChange = (query) => {
        setText(query);
        getQueryValue(query);
    }
    return (
        <form className="search-form">
            <input
                type="text"
                placeholder="Search"
                value={text}
                onChange={ (e) => onChange( e.target.value ) }
                autoFocus
            />
        </form>
    )
}

SearchForm.propTypes = {
    getQueryValue: PropTypes.func.isRequired
}

export default SearchForm;