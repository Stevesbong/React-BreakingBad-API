import React from 'react';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

// Display logo on the top and able to click to go to home page
const Header = ({getQueryValue}) => {
    return (
        <header className="center">
            <NavLink to="/" onClick={ ()=> getQueryValue('')}>
                <img src={ logo } alt='breaking bad' />
            </NavLink>
        </header>
    )
}

export default Header;
