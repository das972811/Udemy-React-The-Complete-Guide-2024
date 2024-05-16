import Player from "./components/Player/Player"

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player name="Diego" symbol="X" />
                    <Player name="Ignacio" symbol="O" />
                </ol>
            </div>
        </main>
    )
}

export default App
