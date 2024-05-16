import { useState } from 'react';

import PropTypes from 'prop-types';

Player.propTypes = {
    initialName: PropTypes.string,
    symbol: PropTypes.string
};

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(wasEditing => !wasEditing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type='text' required value={playerName} onChange={handleChange}/>
        btnCaption = 'Save';
    }

    return (
        <li>
            <span className="player">

                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { handleEditClick() }}>{btnCaption}</button>
        </li>
    );
}