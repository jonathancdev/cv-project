import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import './Header.css';
import logo from '../../../img/logo.png'

function Header () {
    return (
        <section className="header">
            <section className="logo">
                    <Link to="/">
                        <img src={logo} alt="cvbreeze logo"></img>
                    </Link>
                </section>
            <Navbar />
        </section>
    )
}

export default Header;