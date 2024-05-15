import PropTypes from 'prop-types';

Tabs.propTypes = {
    children: PropTypes.node.isRequired,
    buttons: PropTypes.node.isRequired,
    ButtonsContainer: PropTypes.elementType
};

export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // Converts to JSX element : 'menu' => <menu></menu> or 'Section' => <Section></Section>
    // const ButtonsContainer = buttonsContainer;

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}