import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';
import iconoCarro from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {    //el item es un product pero como ya nombramos a otra propiedad con product usamos otro nombre para no generar errores o confusiones.
        addToCart(item);
    }

    return (
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={iconoCarro} alt="" />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem