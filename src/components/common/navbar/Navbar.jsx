import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
    return (
        <section className="navbar">
            {Object.keys(localStorage).includes('activeSession')
            ?<Link to='/' onClick={props.logOut} className="navlinks">sign out</Link>
            : null }

            {props.user !== null && Object.keys(localStorage).includes('activeSession')
            ?  <a></a>
            :  <Link to="/signup" className="navlinks">sign up</Link>   
            }

            {props.user !== null && Object.keys(localStorage).includes('activeSession')
            ?  <Link to="/account" className="navlinks">{props.user.name + ' ' + props.user.surname[0] + '.'}</Link>
            : <Link to="/login" className="navlinks">sign in</Link>
            }

            <div id="bluenav">
                <Link id="bluea" to={Object.keys(localStorage).includes('activeSession') ? "/create" : '/signup'} className="navlinks">create cv</Link>
            </div>
        </section>
    )
}

export default Navbar;