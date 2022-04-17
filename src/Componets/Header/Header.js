import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className='Headers'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/services">Services</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/about">About</Link>
            </nav>


        </div>
    );
};

export default Header;