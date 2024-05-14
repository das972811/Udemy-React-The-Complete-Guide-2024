import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    onSelect: PropTypes.func.isRequired
};

export default function TabButton({ children, onSelect }) {
    return (
        <li><button className="" onClick={onSelect}>{children}</button></li>
    );
}