import { useState } from "react";

import Counter from "./components/Counter/Counter";
import Header from "./components/Header";
import ConfigureCounter from "./components/Counter/ConfigureCounter";
import { log } from "./log.js";

function App() {
    log("<App /> rendered");
    const [chosenCount, setChosenCount] = useState(0);

    function handleSetCount(newCount) {
        setChosenCount(newCount);
    }

    return (
        <>
            <Header />
            <main>
                <ConfigureCounter onSet={handleSetCount} />
                <Counter initialCount={chosenCount} />
            </main>
        </>
    );
}

export default App;
