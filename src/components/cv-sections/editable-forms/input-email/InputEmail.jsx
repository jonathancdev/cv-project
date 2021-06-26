import React, { useState, useEffect, useRef } from "react";
import './InputEmail.css'

const InputEmail = ({
    childRef,
    children,
    value,
    ...props
}) => {
    
    const [isEditing, setEditing] = useState(false);
    const [isValid, setIsValid] = useState(false)
    const errorRef = useRef()

    function validate(bool) {
        props.validate(bool)
    }

    useEffect(() => {
         if (childRef && childRef.current && isEditing === true) {
             childRef.current.select();
         }
     }, [isEditing, childRef]);

    function handleBlur() {
        const value = childRef.current.value
        setEditing(false)
        if (validateEmail(value)) {
            setIsValid(true)
            errorRef.current.style.display = 'none'
        } else {
            setIsValid(false)
            errorRef.current.style.display = 'flex'
        }
    }
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    validate(isValid)
    return (
        <section {...props}>
            {isEditing ? (
                <div className="input-std-div"
                  onBlur={() => handleBlur()}
                >
                {children}
                  </div>
            ) : (
                <div className='input-std-div'
                  onClick={() => setEditing(true)}
                  onFocus={() => setEditing(true)}
                >
                  <div>
                      <input className="rect-std" placeholder={value} />
                  </div>
                </div>
            )}
            <div className="form-error-wrap">
                <span ref={errorRef} class="form-error">invalid email</span>
            </div>
        </section>
    )
};

export default InputEmail;