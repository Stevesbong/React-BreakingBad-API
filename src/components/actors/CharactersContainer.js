import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';
import Loading from '../ui/Loading';

// Display all the datas from web
const CharactersContainer = ({ isLoading, characters }) => {

    // if data still loading, mount Loading component
    // else send all the info to the Character component
    return isLoading ?
        ( <Loading /> ) :
        ( <section className="cards">
            { characters.map( character => (
                <Character 
                    key={ character.char_id }
                    character={ character }
                />
            ) ) }
        </section> )
}

CharactersContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CharactersContainer;
