import PropTypes from 'prop-types';

UserInput.propTypes = {
    onChange: PropTypes.func,
    userInput: PropTypes.object
};

export default function UserInput({ onChange, userInput }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investement</label>
                    <input type="number" value={userInput.initialInvestment} required onChange={(event) => onChange('initialInvestment', event) } />
                </p>
                <p>
                    <label>Annual Investement</label>
                    <input type="number" value={userInput.annualInvestment} required onChange={(event) => onChange('annualInvestment', event)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} required onChange={(event) => onChange('expectedReturn', event)} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={userInput.duration} required onChange={(event) => onChange('duration', event)} />
                </p>
            </div>
        </section>
    );
}