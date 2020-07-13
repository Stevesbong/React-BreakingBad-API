import React from 'react';
import logo from '../../img/logo.png';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Display logo on the top and able to click to go to home page
const Header = ({getQueryValue}) => {
    return (
        <header className="center">
            <NavLink to="/" onClick={ ()=> getQueryValue('')}>
                <img className="logo" src={ logo } alt='breaking bad' />
            </NavLink>
        </header>
    )
}

Header.propTypes = {
    getQueryValue: PropTypes.func.isRequired
}

export default Header;
