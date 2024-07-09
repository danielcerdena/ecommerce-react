import React from 'react';
import CartWidget from './cartWidget';
import './navBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <a href="">Danelli's</a>
                <a href="">Plata</a>
                <a href="">Oro</a>
                <a href="">Acero</a>
                <a href="">Relojes</a>
            </div>
            <CartWidget />
        </div>
    );
};

export default NavBar;
