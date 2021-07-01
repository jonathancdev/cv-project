import React, { useState, useEffect, useRef } from "react";
import './InputStd.css'

const InputStd = ({
    childRef,
    children,
    value,
    required,
    ...props
}) => {
    const [isEditing, setEditing] = useState(false);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
         if (childRef && childRef.current && isEditing === true) {
             childRef.current.select();
         }
     }, [isEditing, childRef]);

    const inputRef = useRef()
    function handleBlur(e) {
        setEditing(false)
        validate(e)
        }
    function validate(e) {
        const curValue = e.target.value
        const ogValue = props.originalValue
        if (curValue === ogValue || curValue === '') {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
    }
    return (
        <section {...props}>
            {isEditing ? (
                <div className="input-std-div"
                  onBlur={handleBlur}
                >
                {children}
                  </div>
            ) : (
                <div className="input-std-div"
                  onClick={() => setEditing(true)}
                  onFocus={() => setEditing(true)}
                >
                  <div>
                      <input ref={inputRef} className="rect-std" placeholder={value} readOnly={true}/>
                  </div>
                </div>
            )}
            {required && !isValid ? 
            <div className="std-form-error-wrap">
                <span class="std-form-error">required</span>
            </div>
            : null}
        </section>
    )
};

export default InputStd;
