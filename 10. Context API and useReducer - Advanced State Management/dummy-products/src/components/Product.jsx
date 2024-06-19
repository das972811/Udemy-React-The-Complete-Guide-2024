import { useContext } from 'react';

import PropTypes from 'prop-types';

import { CartContext } from '../store/shopping-cart-context';

Product.propTypes = {
    id: PropTypes.any,
    image: PropTypes.any,
    title: PropTypes.any,
    price: PropTypes.any,
    description: PropTypes.any
};

export default function Product({ id, image, title, price, description }) {
    const { addItemToCart } = useContext(CartContext);
    return (
    <article className="product">
        <img src={image} alt={title} />
        <div className="product-content">
        <div>
            <h3>{title}</h3>
            <p className='product-price'>${price}</p>
            <p>{description}</p>
        </div>
        <p className='product-actions'>
            <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
        </div>
    </article>
    );
}