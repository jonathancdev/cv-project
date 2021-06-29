import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login (props) {

    const [auth, setAuth] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [tempUser, setTempUser] = useState(null)
    const [currEmail, setCurrEmail] = useState('')
    const [currPassword, setCurrPassword] = useState('')

    const passwordRef = useRef(null)
    const emailRef = useRef(null)

    // function handleSubmit() {
    //     console.log('login attempt')
    //     authenticate()
    // }
    console.log(auth)
    function authenticate() {
        const mail = emailRef.current.value
        const pw = passwordRef.current.value
        const keys = Object.keys(localStorage).filter( item => item.includes('userInfo'))
        if (keys.length === 0) {
            setErrorMsg('no account found for ' + currEmail)
            setAuth(false)
        } else {
            keys.forEach(key => {
                const user = localStorage.getObject(key)
                const userMail = user.email
                const userPw = user.password
                if (mail === userMail && pw === userPw) {
                    setTempUser(user)
                    setAuth(true)
                } else {
                    setErrorMsg('login failed')
                    setAuth(false)
                }
            })
        }

        //for all localstorage userIDs, if email and password match
        //setUser to that userID
        //if no match, say login not found, prompt to create account
        //setUser to null
    }
    function emailHandleChange(e) {
        const value = e.target.value
        setCurrEmail(value)
    }
    function passwordHandleChange(e) {
        const value = e.target.value
        setCurrPassword(value)
    }
    return (
        <section className="login">
            <section className="section-wrap">
                <section className="cv-header">
                    <h2>Enter your account:</h2>
                </section>
                <div>
                <div className='login-form-wrap'>
                <input
                    ref={emailRef}
                    className="rect-std user"
                    placeholder='email'
                    maxLength="40"
                    onChange={emailHandleChange}
                />

                <input
                    type="password"
                    placeholder='password'
                    ref={passwordRef}
                    className="rect-std user"
                    maxLength="30"
                    onChange={passwordHandleChange}
                    onBlur={authenticate}
                />
                </div>
            </div>

                <section className="login-form-submit">
                <div className={currEmail !== '' && currPassword !== '' ? 'active-div signup-btn-div' : 'inactive-div signup-btn-div'}>
                    <Link className={currEmail !== '' && currPassword !== '' ? 'active-div signup-btn' : 'inactive-div signup-btn'} to={auth ? '/create' : '/login'} onClick={auth ? props.setUser(tempUser) : null}>log in</Link>
                </div>
                <div className="login-form-error-wrap">
                    <span className="login-form-error">{errorMsg}</span>
                </div>

                    <div>
                        <p>don't have an account?</p>
                        <Link className="tologin" to={'/signup'} >sign up here</Link>
                    </div>
                </section>
            </section> 
        </section>
    )
}

export default Login;