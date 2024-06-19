import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import Cart from './Cart';

const CartModal = forwardRef(function Modal({ title, actions },
    ref
    ) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
        open: () => {
            dialog.current.showModal();
        },
        };
    });

    return createPortal(
        <dialog id="modal" ref={dialog}>
        <h2>{title}</h2>
        <Cart/>
        <form method="dialog" id="modal-actions">
            {actions}
        </form>
        </dialog>,
        document.getElementById('modal')
    );
});

CartModal.propTypes = {
    cartItems: PropTypes.any,
    onUpdateCartItemQuantity: PropTypes.any,
    title: PropTypes.any,
    actions: PropTypes.any
};

export default CartModal;
