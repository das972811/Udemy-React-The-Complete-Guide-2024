import PropTypes from 'prop-types';

Product.propTypes = {
    id: PropTypes.any,
    image: PropTypes.any,
    title: PropTypes.any,
    price: PropTypes.any,
    description: PropTypes.any,
    onAddToCart: PropTypes.any
};

export default function Product({ id, image, title, price, description, onAddToCart }) {
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
            <button onClick={() => onAddToCart(id)}>Add to Cart</button>
        </p>
        </div>
    </article>
    );
}