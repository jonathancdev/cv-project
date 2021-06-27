import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
    const [showFlag, setShowFlag] = useState(false)

    function clickYes() {
        console.log('yes')
        props.logOut()
        setShowFlag(prevShowFlag => !prevShowFlag)
    }
    function clickNo() {
        console.log(this)
        setShowFlag(prevShowFlag => !prevShowFlag)
    }
    function handleFlag() {
        setShowFlag(prevShowFlag => !prevShowFlag)

    }
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
            ?<a 
            onClick={handleFlag}
            className="navlinks">
            sign out
            </a>
            : null }
            {showFlag ?
            <div className="signout-flag-div">

                <p className="signout-flag">are you sure?</p>

                <div className="yesno">
                    <Link className="yesnobtn" to='/' onClick={clickYes}><a>yes</a></Link>
                    <button className="yesnobtn" onClick={clickNo}><a>no</a></button>
                </div>

            </div>
            : null}

        </section>
    )
}

export default Navbar;