import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar (props) {
    const [showFlag, setShowFlag] = useState(false)

    const windowWidth = window.innerWidth

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
    console.log(windowWidth)
    return (
        <section className="navbar">
            <Link id="bluea" to={props.active ? "/create" : '/signup'} className="navlinks">create cv</Link>

            
            {windowWidth > 600
            ? <>
                {props.user !== null && props.active
            ?  null
            :  <Link to="/signup" className="navlinks">sign up</Link>   
            }
                </>
            : null }


            <div className="mobile-navlinks-wrap">
                {props.user !== null && props.active
                ?  <Link to="/account" className="navlinks">{windowWidth >= 600 ? props.user.name + ' ' + props.user.surname[0] + '.' : 'account'}</Link>
                : <Link to="/login" className="navlinks">sign in</Link>
                }

                <p className="spacer">|</p>

                {props.active
                ?<button 
                onClick={handleFlag}
                className="navlinks">
                sign out
                </button>
                :
                

                    <>
                    {windowWidth < 600
                    ? <Link to="/signup" className="navlinks">sign up</Link>
                    :null}
                    </>   }


            </div>
            {showFlag ?
            <div className="signout-flag-div">

                <p className="signout-flag">{windowWidth >= 600 ? 'sign out?' : 'are you sure?'}</p>

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