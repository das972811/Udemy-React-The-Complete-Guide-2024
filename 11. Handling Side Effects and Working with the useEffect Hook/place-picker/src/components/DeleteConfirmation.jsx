import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const TIMER = 3000;

DeleteConfirmation.propTypes = {
    onConfirm: PropTypes.any,
    onCancel: PropTypes.any
};

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const [remainingTime, setRemaingTime] = useState(TIMER);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            console.log('internval');
            setRemaingTime((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(timerInterval);
        };
    }, []);

    useEffect(() => {
        console.log('Timer set');
        const timer = setTimeout(() => {
            onConfirm();
        }, TIMER);

        return () => {
            console.log('cleaning up timer');
            clearTimeout(timer);
        };
    }, [onConfirm]);
    
    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                    No
                </button>
                <button onClick={onConfirm} className="button">
                    Yes
                </button>
            </div>
            <progress value={remainingTime} max={TIMER} />
        </div>
    );
}