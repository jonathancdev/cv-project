import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import './Header.css';
import logo from '../../../img/logo.png'

function Header (props) {

    return (
        <section className="header">
            <section className="logo">
                    <Link to="/">
                        <img src={logo} alt="cvbreeze logo"></img>
                    </Link>
            </section>
            <Navbar complete={props.complete} active={props.active} logOut={props.logOut} user={props.user}/>
        </section>
    )
}

export default Header;