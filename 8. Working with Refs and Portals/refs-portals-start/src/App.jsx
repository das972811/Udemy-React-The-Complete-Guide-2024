import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
    return (
        <>
            <Player />
            <div id="challenges">
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Easy" targetTime={1} />
                <TimerChallenge title="Easy" targetTime={1} />
            </div>
        </>
    );
}

export default App;
