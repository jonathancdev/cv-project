import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
    return (
        <section className="navbar">

            <Link id="bluea" to={Object.keys(localStorage).includes('activeSession') ? "/create" : '/signup'} className="navlinks">create cv</Link>

            {props.user !== null && Object.keys(localStorage).includes('activeSession')
            ?  null
            :  <Link to="/signup" className="navlinks">sign up</Link>   
            }

            {props.user !== null && Object.keys(localStorage).includes('activeSession')
            ?  <Link to="/account" className="navlinks">{props.user.name + ' ' + props.user.surname[0] + '.'}</Link>
            : <Link to="/login" className="navlinks">sign in</Link>
            }

            {Object.keys(localStorage).includes('activeSession')
            ?<Link to='/' onClick={props.logOut} className="navlinks">
                sign out
                <div className="signout-flag-div">
                    <p className="signout-flag">sign out of {props.user.name + 's account?'}</p>
                </div>
            </Link>
            : null }

        </section>
    )
}

export default Navbar;