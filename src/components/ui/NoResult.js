import React from 'react';

// when there is no result on the search
const NotResult = () => {
    return (
        <li className="not-found">
            <h3>No Result Found</h3>
            <hr className="line" />
            <p>You search did not return any results. Please try again.</p>
        </li>
    )
}

export default NotResult;