import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
    const [showFlag, setShowFlag] = useState(false)

    function clickYes() {
        props.logOut()
        setShowFlag(prevShowFlag => !prevShowFlag)
    }
    function clickNo() {
        setShowFlag(prevShowFlag => !prevShowFlag)
    }
    function handleFlag() {
        setShowFlag(prevShowFlag => !prevShowFlag)

    }
    return (
        <section className="navbar">
            <Link id="bluea" to={props.active ? "/create" : '/signup'} className="navlinks">create cv</Link>

            {props.user !== null && props.active
            ?  null
            :  <Link to="/signup" className="navlinks">sign up</Link>   
            }

            {props.user !== null && props.active
            ?  <Link to="/account" className="navlinks">{props.user.name + ' ' + props.user.surname[0] + '.'}</Link>
            : <Link to="/login" className="navlinks">sign in</Link>
            }

            {props.active
            ?<button 
            onClick={handleFlag}
            className="navlinks">
            sign out
            </button>
            : null }
            {showFlag ?
            <div className="signout-flag-div">

                <p className="signout-flag">are you sure?</p>

                <div className="yesno">
                    <Link className="yesnobtn" to='/' onClick={clickYes}>yes</Link>
                    <button className="yesnobtn" onClick={clickNo}>no</button>
                </div>

            </div>
            : null}

        </section>
    )
}

export default Navbar;