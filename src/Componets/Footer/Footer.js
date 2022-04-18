import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer>
            <small>CopyRight {year}</small>

        </footer>

    );
};

export default Footer;