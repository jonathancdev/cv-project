import React, { useState, useEffect, useRef } from "react";
import './InputPwd.css'

const InputPwd = ({
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
        const value = childRef.current.value.length
        setEditing(false)
        if (value > 7) {
            setIsValid(true)
            errorRef.current.style.display = 'none'
        } else {
            setIsValid(false)
            errorRef.current.style.display = 'flex'
        }
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
                      <input className="rect-std" placeholder={value !== '' ? value : 'password'} minLength="8" />
                  </div>
                </div>
            )}
            <div className="form-error-wrap">
                <span ref={errorRef} class="form-error">enter 8 or more characters</span>
            </div>
        </section>
    )
};

export default InputPwd;