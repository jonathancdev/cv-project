import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <section className="navbar">
            <Link to="/pricing" className="navlinks">pricing</Link>
            <Link to="/login" className="navlinks">login</Link>
            <Link to="/signup" className="navlinks">signup</Link>   
            <div id="bluenav">
                <Link id="bluea" to="/create" className="navlinks">create cv</Link>
            </div>
        </section>
    )
}

export default Navbar;