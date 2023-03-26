import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
                <h6>{name}</h6>
                <h4>Price: ${price}</h4>
                <p>Manufacturer:{seller} </p>
                <p>Rating:{ratings} star </p>
            </div>
            <button className='add-to-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;