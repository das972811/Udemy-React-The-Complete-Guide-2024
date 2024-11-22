import { useContext } from 'react';

import CartContext from '../store/CartContext';

import Button from './ui/Button';

import logoImg from '../assets/logo.jpg';

export default function Header() {
    const cartCtx = useContext(CartContext);

    const totalCartItem = cartCtx.items.reduce((totalNumberOfItem, item) => {
        return totalNumberOfItem + item.quantity;
    }, 0);

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt={logoImg} />
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItem})</Button>
            </nav>
        </header>
    );
}