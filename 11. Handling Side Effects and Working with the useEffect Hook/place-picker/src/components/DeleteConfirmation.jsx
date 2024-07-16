import { useEffect } from 'react';

import PropTypes from 'prop-types';

DeleteConfirmation.propTypes = {
    onConfirm: PropTypes.any,
    onCancel: PropTypes.any
};

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    useEffect(() => {
        const  timer = setTimeout(() => {
            onConfirm();
        }, 3000);

        return () => {
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
        </div>
    );
}