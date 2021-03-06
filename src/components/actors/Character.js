import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ character }) => {

    // Display each character's infomation to card
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={character.img} alt="" />
                </div>
                <div className="card-back">
                    <h1>{character.name}</h1>
                    <ul>
                        <li><strong>Actor Name:</strong>{character.portrayed}</li>
                        <li><strong>Nickname:</strong>{character.nickname}</li>
                        <li><strong>Birthday:</strong>{character.birthday}</li>
                        <li><strong>Status:</strong>{character.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Character.propTypes = {
    character: PropTypes.object.isRequired
}

export default Character;