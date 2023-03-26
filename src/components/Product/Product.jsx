import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { img, name, price, seller, ratings } = props.product;

    const handelAddToCart = props.handelAddToCart;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h6>{name}</h6>
                <h4>Price: ${price}</h4>
                <p>Manufacturer:{seller} </p>
                <p>Rating:{ratings} star </p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='add-to-cart'>
                Add To Cart 
                <FontAwesomeIcon icon={ faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;