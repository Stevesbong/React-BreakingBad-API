import React from 'react';

import loading from '../../img/spinner.gif';

// Loading gif image mount on the DOM while getting data from the web
const Loading = () => {
    return (
        <img
            src={ loading }
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt="loading"
        />
    )
}

export default Loading
