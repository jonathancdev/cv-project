import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
    return (
        <section className="navbar">
            {/* <Link to="/pricing" className="navlinks">pricing</Link> */}

            {props.user !== null && Object.keys(localStorage).includes('activeSession')
            ?  <Link to="/account" className="navlinks">{props.user.name + ' ' + props.user.surname[0] + '.'}</Link>
            : <Link to="/login" className="navlinks">login</Link>
            }

            {props.user !== null && Object.keys(localStorage).includes('activeSession')
            ?  <a></a>
            :  <Link to="/signup" className="navlinks">signup</Link>   
            }

            <div id="bluenav">
                <Link id="bluea" to="/create" className="navlinks">create cv</Link>
            </div>
        </section>
    )
}

export default Navbar;