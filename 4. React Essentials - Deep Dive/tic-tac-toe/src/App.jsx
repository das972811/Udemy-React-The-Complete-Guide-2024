import { useState } from 'react';

import GameBoard from "./components/GameBoard/GameBoard";
import Player from "./components/Player/Player";

function App() {
    const [activePlayer, setActivePlayer] = useState('X');

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O': 'X');
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Diego" symbol="X" isActive={activePlayer === 'X'}/>
                    <Player initialName="Ignacio" symbol="O" isActive={activePlayer === 'O'}/>
                </ol>
                <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
            </div>
        </main>
    )
}

export default App
