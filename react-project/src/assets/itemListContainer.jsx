import React from 'react';
import './itemListContainer.css';
const itemListContainer = ({ name, price, material }) => {
    return (
        <div className="jewel">
            <h2>{name}</h2>
            <p>Precio: ${price}</p>
            <p>Material: {material}</p>
        </div>
    );
};

export default itemListContainer;