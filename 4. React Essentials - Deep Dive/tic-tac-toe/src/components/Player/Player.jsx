import { useState } from 'react';

import PropTypes from 'prop-types';

Player.propTypes = {
    initialName: PropTypes.string,
    symbol: PropTypes.string,
    isActive: PropTypes.bool,
    onChangeName: PropTypes.func
};

export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing(wasEditing => !wasEditing);

        if(isEditing) {
            onChangeName(symbol, playerName);
        }
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
        <li className={isActive ? 'active' : undefined}>
            <span className="player">

                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => { handleEditClick() }}>{btnCaption}</button>
        </li>
    );
}