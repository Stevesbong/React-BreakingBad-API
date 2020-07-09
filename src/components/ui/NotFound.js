import React from 'react';

// When page does not exist
const NotFound = () => {
    return (
        <li className="not-found">
            <h1>404 - Page Not Found </h1>
            <hr className="line" />
            <p>Oops!  It looks like the page you're looking for <strong>does not exist.</strong></p>
        </li>
    )
}

export default NotFound;