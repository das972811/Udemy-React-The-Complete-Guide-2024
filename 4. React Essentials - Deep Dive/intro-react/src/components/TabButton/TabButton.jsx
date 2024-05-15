import PropTypes from 'prop-types';

TabButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]).isRequired,
    isSelected: PropTypes.bool.isRequired,
    props: PropTypes.any
};

export default function TabButton({ children, isSelected, ...props }) {
    return (
        <li><button className={isSelected ? 'active': undefined} {...props} >{children}</button></li>
    );
}