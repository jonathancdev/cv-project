import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom'
import { removeStorage } from '../../common'
import './Account.css';

function Account (props) {
    console.log(props)
    const [message, setMessage] = useState('')
    const [fnc, setFnc] = useState(null)
    const options = useRef()

    function handleSignOut() {
        options.current.style.display = 'flex'
        setMessage('are you sure you want to sign out?')
        setFnc('a')
    }
    function handleDelete() {
        options.current.style.display = 'flex'
        setMessage('are you sure you want to delete your account?')
        setFnc('b')
    }
    function chooseFnc() {
        if (fnc === 'a') {
            props.logOut()
        } else if (fnc === 'b') {
            deleteUser()
        }
    }

    function deleteUser() {
        props.logOut()
        console.log(props.user.userId)
        const id = props.user.userId
        const keys = Object.keys(localStorage).filter(item => item.includes(id))
        console.log(keys)
        keys.forEach(key => {
            removeStorage(key)
        })
        const users = Object.keys(localStorage).filter(item => item.includes('user'))
        console.log(users)
        const thisUser = users.filter(item => localStorage.getObject(item) === id  || localStorage.getObject(item).userId === id)
        thisUser.forEach(key => {
            removeStorage(key)
        })
        console.log(thisUser)
        removeStorage('currentUser')
    }
    function handleNo() {
        options.current.style.display = 'none'
        setMessage('')
    }

    return (
        <section className="account">
            <section className="section-wrap">
                <div className="account-wrap">
                    <h2>{props.user.name + '\'s account'}</h2>
                    <p>{props.user.email}</p>
                    <div className="buttons-wrap">
                                <button onClick={handleSignOut}>sign out</button>
                                <button onClick={handleDelete}>delete account</button>
                            </div>

                    <div className="account-message">
                        <div className="message-wrap">
                            <p>{message}</p>
                            <div ref={options} className="account-options">
                            <Link to="/login" onClick={chooseFnc}>yes</Link>
                            <Link to="#" onClick={handleNo}>no</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </section>
    )
}

export default Account;

                    // <div className="account-options">
                    //     <Link to="#" onClick={handleSignOut}>sign out</Link>
                    //     <Link to="#" onClick={handleDelete}>delete account</Link>
                    // </div>