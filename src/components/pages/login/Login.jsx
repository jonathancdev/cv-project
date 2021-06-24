import React, {useRef} from 'react';
import './Login.css';

function Login (props) {


    const passwordRef = useRef(null)
    const emailRef = useRef(null)

    function handleSubmit() {
        console.log('login attempt')
        authenticate()
    }
    function authenticate() {
        const mail = emailRef.current.value
        const pw = passwordRef.current.value
        const keys = Object.keys(localStorage).filter( item => item.includes('userInfo'))
        if (keys.length === 0) {
            alert('account does not exist, please sign up')
        } else {
            keys.forEach(key => {
                const user = localStorage.getObject(key)
                const userMail = user.email
                const userPw = user.password
                if (mail === userMail && pw === userPw) {
                    props.setUser(user)
                } else {
                    alert('login failed')
                }
            })
        }
        //for all localstorage userIDs, if email and password match
        //setUser to that userID
        //if no match, say login not found, prompt to create account
        //setUser to null
    }
    return (
        <section className="login">
            <section className="section-wrap">
                <div>
                <input
                    ref={emailRef}
                    className="rect-std user"
                    placeholder='email'
                    maxLength="25"
                />

                <input
                    type="password"
                    placeholder='password'
                    ref={passwordRef}
                    className="rect-std user"
                    maxLength="30"
                />
                </div>

                <div>
                    <button onClick={handleSubmit}>login</button>
                </div>
            </section> 
        </section>
    )
}

export default Login;