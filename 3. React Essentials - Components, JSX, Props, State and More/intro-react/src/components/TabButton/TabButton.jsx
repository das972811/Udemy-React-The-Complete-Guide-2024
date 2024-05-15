import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    onSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
};

export default function TabButton({ children, onSelect, isSelected }) {
    return (
        <li><button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button></li>
    );
}