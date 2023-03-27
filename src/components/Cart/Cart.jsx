import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {

    let totalPrice = 0;
    let totalShippingCharge = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const product of cart) {
        console.log(product);
        totalPrice = totalPrice + product.price;
        totalShippingCharge = totalShippingCharge + product.shipping;
        tax = totalPrice * 7 /100;
        grandTotal = totalPrice + totalShippingCharge + tax;
    }


    return (
        <div className='order-summery'>
            <h3>Order Summery</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShippingCharge.toFixed(2)}</p>
            <p>7% Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;