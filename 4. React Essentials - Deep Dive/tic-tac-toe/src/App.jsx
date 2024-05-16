import Player from "./components/Player/Player"

function App() {
    return (
        <main>
            <div id="game-container">
                <ol id="players">
                    <Player initialName="Diego" symbol="X" />
                    <Player initialName="Ignacio" symbol="O" />
                </ol>
            </div>
        </main>
    )
}

export default App
