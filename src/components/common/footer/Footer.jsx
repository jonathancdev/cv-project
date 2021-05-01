import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import qicon from '../../../img/qicon.png'

function Footer () {
    return (
        <section className="footer">
            <section className="qicon">
                    <Link to="/help">
                        <img src={qicon}></img>
                    </Link>
                </section>
        </section>
    )
}

export default Footer;