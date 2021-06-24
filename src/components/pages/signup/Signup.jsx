import { React, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { InputStd, InputPwd } from '../../cv-sections/'

function Signup (props) {

    const [firstName, setFirstName] = useState('first name')
    const [lastName, setLastName] = useState('last name')
    const [profession, setProfession] = useState('profession')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('email')
    const [userCount, setUserCount] = useState(Object.keys(localStorage).includes("userId") ? Object.keys(localStorage).filter( item => item.includes('userId')).length : 1 )

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const professionRef = useRef(null)
    const passwordRef = useRef(null)
    const emailRef = useRef(null)

   let userObj = {}


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
    function emailBlur(e) {
        const value = e.target.value
        if (validateEmail(value)) {
            console.log('valid')
            e.target.parentElement.classList.toggle('invalid')
        } else {
            console.log('invalid')
            e.target.parentElement.classList.toggle('invalid')
        }
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function hidePw(pw) {
        const length = pw.length
        const hidden = '*'.repeat(length)
        return hidden
    }
    function updateUserCount() {
        setUserCount(Object.keys(localStorage).filter( item => item.includes('userId')).length + 1)
    }
    function handleSubmit() {
        if (validateEmail(email)) {
            localStorage.setObject('userInfo' + userCount, createObject())
            localStorage.setObject('userId' + userCount, 'cvID' + firstName[0] + firstName.length + lastName[0] + lastName.length + profession[0] + profession.length)
            updateUserCount()
            props.setUser(userObj)
            reset()
        } else {
            alert('enter a valid email address')
        }
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

                    <InputStd
                    childRef={emailRef}
                    value={email}
                    >
                        {/* isEditing input */}
                        <input
                            ref={emailRef}
                            className="rect-std user"
                            placeholder='email'
                            value={email} 
                            onChange={setMail}
                            maxLength="25"
                            type="email"
                            onBlur={emailBlur}

                        />
                    </InputStd>

                    <InputPwd
                    childRef={passwordRef}
                    value={hidePw(password)}
                    >
                        {/* isEditing input */}
                        <input
                            type="password"
                            ref={passwordRef}
                            className="rect-std user"
                            value={password} 
                            onChange={setPw}
                            maxLength="30"
                        />
                    </InputPwd>
                    <div>
                        <Link to={validateEmail(email) ? '/create' : '/signup'} onClick={handleSubmit}>create account</Link>
                    </div>
                </div>
            </section> 
        </section>
    )
}

export default Signup;