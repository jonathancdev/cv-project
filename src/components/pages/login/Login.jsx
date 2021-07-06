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

    function authenticate() {
        const mail = emailRef.current.value
        console.log(mail)
        const pw = passwordRef.current.value
        console.log(pw)
        const keys = Object.keys(localStorage).filter( item => item.includes('userInfo'))
        console.log(keys)

        for (var i = 0; i < keys.length; i++) {
            const user = localStorage.getObject(keys[i])
            const userMail = user.email
            const userPw = user.password
            if(mail === userMail && pw === userPw) {
                setTempUser(user)
                setAuth(true)
                break;
            } else {
                setAuth(false)
            }
        }
    }
    function emailHandleChange(e) {
        const value = e.target.value
        setCurrEmail(value)
        setErrorMsg('')
    }
    function passwordHandleChange(e) {
        const value = e.target.value
        setCurrPassword(value)
        setErrorMsg('')
    }
    function handleClick() {
        const keys = Object.keys(localStorage).filter( item => item.includes('userInfo'))
        console.log(keys)
        console.log(auth)
        if (auth) {
            props.setUser(tempUser)
        } else if (keys.length > 0) {
            setErrorMsg('incorrect email or password')
        } else {
            setErrorMsg('no account found for ' + currEmail)
        }
    }
    console.log(tempUser)
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
                    <Link className={currEmail !== '' && currPassword !== '' ? 'active-div signup-btn' : 'inactive-div signup-btn'} to={auth ? '/create' : '/login'} onClick={handleClick}>log in</Link>
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