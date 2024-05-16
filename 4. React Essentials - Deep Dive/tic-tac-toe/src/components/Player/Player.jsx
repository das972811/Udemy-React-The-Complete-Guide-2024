import { useState } from 'react';

import PropTypes from 'prop-types';

Player.propTypes = {
    name: PropTypes.string,
    symbol: PropTypes.string
};

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(wasEditing => !wasEditing);
    }

    let playerName = <span className="player-name">{name}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        playerName = <input type='text' required value={name}/>
        btnCaption = 'Save';
    }

    return (
        <li>
            <span className="player">

                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { handleEditClick() }}>{btnCaption}</button>
        </li>
    );
}