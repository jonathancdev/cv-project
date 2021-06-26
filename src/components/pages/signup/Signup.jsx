import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { InputStd, InputPwd, InputEmail } from '../../cv-sections/'

function Signup (props) {

    const [firstName, setFirstName] = useState('first name')
    const [lastName, setLastName] = useState('last name')
    const [profession, setProfession] = useState('profession')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('email')
    const [userCount, setUserCount] = useState(Object.keys(localStorage).includes("userId0") ? Object.keys(localStorage).filter( item => item.includes('userId')).length : 0 )
    const [emailValid, setEmailValid] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const professionRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)

   let userObj = {}
    console.log(userCount)

    function setFirst(e) {
        const value = e.target.value
        setFirstName(value)
    }
    function setLast(e) {
        const value = e.target.value
        setLastName(value)
    }
    function setPro(e) {
        const value = e.target.value
        setProfession(value)
    }
    function setPw(e) {
        const value = e.target.value
        setPassword(value)
    }
    function setMail(e) {
        const value = e.target.value
        setEmail(value)
    }
    function hidePw(pw) {
        const length = pw.length
        const hidden = '*'.repeat(length)
        return hidden
    }
    function handleSubmit() {
        if (emailValid && passwordValid) {
            localStorage.setObject('userInfo' + userCount, createObject())
            localStorage.setObject('userId' + userCount, 'cvID' + firstName[0] + firstName.length + lastName[0] + lastName.length + profession[0] + profession.length)
            updateUserCount()
            props.setUser(userObj)
            reset()
        }
    }
    function updateUserCount() {
        setUserCount(prevUserCount => prevUserCount + 1)
    }

    function createObject() {
        const userInfo = {
            name: firstName,
            surname: lastName,
            profession: profession,
            password: password,
            email: email,
            userId: 'cvID' + firstName[0] + firstName.length + lastName[0] + lastName.length + profession[0] + profession.length
        }
        userObj = userInfo
        return userInfo
    }
    function reset () {
        userObj = {}
        setFirstName('first name')
    }
    function checkEmail(bool) {
        setEmailValid(bool)
    }
    function checkPassword(bool) {
        setPasswordValid(bool)
    }

    return (
        <section className="signup">
            <section className="section-wrap">
                <div>
                <InputStd
                    childRef={firstNameRef}
                    value={firstName}
                    >
                        {/* isEditing input */}
                        <input
                            ref={firstNameRef}
                            className="rect-std user"
                            placeholder='first name'
                            value={firstName} 
                            onChange={setFirst}
                            maxLength="30"

                        />
                    </InputStd>

                    <InputStd
                    childRef={lastNameRef}
                    value={lastName}
                    >
                        {/* isEditing input */}
                        <input
                            ref={lastNameRef}
                            className="rect-std user"
                            placeholder='last name'
                            value={lastName} 
                            onChange={setLast}
                            maxLength="30"

                        />
                    </InputStd>

                    <InputStd
                    childRef={professionRef}
                    value={profession}
                    >
                        {/* isEditing input */}
                        <input
                            ref={professionRef}
                            className="rect-std user"
                            placeholder='last name'
                            value={profession} 
                            onChange={setPro}
                            maxLength="50"

                        />
                    </InputStd>

                    <InputEmail
                    childRef={emailRef}
                    value={email}
                    validate={checkEmail}
                    >
                        {/* isEditing input */}
                        <input
                            ref={emailRef}
                            className="rect-std user"
                            placeholder='email'
                            value={email} 
                            onChange={setMail}
                            maxLength="25"
                        />
                    </InputEmail>

                    <InputPwd
                    childRef={passwordRef}
                    value={hidePw(password)}
                    validate={checkPassword}
                    >
                        {/* isEditing input */}
                        <input
                            type="password"
                            ref={passwordRef}
                            className="rect-std user"
                            value={password} 
                            onChange={setPw}
                            maxLength="30"
                            minLength="8"
                        />
                    </InputPwd>
                    <div>
                        <Link to={emailValid && passwordValid ? '/create' : '/signup'} className={emailValid && passwordValid ? 'active-link' : 'inactive-link'} onClick={handleSubmit}>create account</Link>
                    </div>
                    <div>
                        <p>already have an account?</p>
                        <Link to={'/login'} >sign in here</Link>
                    </div>
                </div>
            </section> 
        </section>
    )
}

export default Signup;