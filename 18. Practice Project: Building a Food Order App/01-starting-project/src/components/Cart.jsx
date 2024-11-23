import { useContext } from "react";

import CartContext from '../store/CartContext';

import Modal from "./ui/Modal";

import { currencyFormatter } from '../util/formatting';

export default function Cart() {
    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.quantity * item.price;
    }, 0);

    return (
        <Modal className="cart">
            <h2>Your cart</h2>
            <ul>
                {cartCtx.items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    );
}