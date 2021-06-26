import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import './Header.css';
import logo from '../../../img/logo.png'

function Header (props) {
    function handleClick() {
        localStorage.clear();
    }
    return (
        <section className="header">
            <section className="logo">
                    <Link to="/">
                        <img src={logo} alt="cvbreeze logo"></img>
                    </Link>
            </section>
            <button onClick={handleClick}>clear storage</button>
            <Navbar complete={props.complete} logOut={props.logOut} user={props.user}/>
        </section>
    )
}

export default Header;