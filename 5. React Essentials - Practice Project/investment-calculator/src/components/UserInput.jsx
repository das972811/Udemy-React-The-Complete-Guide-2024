import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10_000,
        annualInvestment: 1_200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => ({...prevUserInput, [inputIdentifier]: newValue}));
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investement</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => handleChange('initialInvestment', event) } />
                </p>
                <p>
                    <label>Annual Investement</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(event) => handleChange('annualInvestment', event)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => handleChange('expectedReturn', event)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => handleChange('duration', event)} />
                </p>
            </div>
        </section>
    );
}