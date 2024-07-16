import { useState, useEffect } from "react";

import PropTypes from 'prop-types';

ProgressBar.propTypes = {
    timer: PropTypes.number
};

export default function ProgressBar({ timer }) {
    const [remainingTime, setRemaingTime] = useState(timer);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            console.log('internval');
            setRemaingTime((prevTime) => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(timerInterval);
        };
    }, []);

    return (<>
        <progress value={remainingTime} max={timer} />
    </>);
}