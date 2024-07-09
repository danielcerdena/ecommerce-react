import React from 'react';
import cart from './cart.png';
import './cartWidget.css'; 

const CartWidget = () => {
    return (
        <button className="cart">
            <img src={cart} alt="Cart Icon" className="button-cart" />
        </button>
    );
};

export default CartWidget;
