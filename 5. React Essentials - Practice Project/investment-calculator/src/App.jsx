import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10_000,
        annualInvestment: 1_200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => (
            {
                ...prevUserInput,
                [inputIdentifier]: +newValue.target.value
            })
        );
    }

    return (
        <>
            <Header/>
            <UserInput onChange={handleChange} userInput={userInput}/>
            {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
            {inputIsValid && <Results userInput={userInput} />}
        </>
    )
}

export default App
