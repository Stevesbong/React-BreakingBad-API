import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({getQueryValue}) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/jesse" onClick={ ()=> getQueryValue('jesse')}>Jesse</NavLink></li>
                <li><NavLink to="/gustavo" onClick={ ()=> getQueryValue('gustavo')}>Gustavo</NavLink></li>
                <li><NavLink to="/skinny" onClick={ ()=> getQueryValue('skinny')}>Skinny</NavLink></li>
            </ul>
        </nav>
    )
}

Nav.propTypes = {
    getQueryValue: PropTypes.func.isRequired
}

export default Nav;