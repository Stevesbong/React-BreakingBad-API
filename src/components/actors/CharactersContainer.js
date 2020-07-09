import React from 'react';

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

export default CharactersContainer;
