import React, { useState, useEffect } from "react";
import './InputPwd.css'

const InputPwd = ({
    childRef,
    children,
    value,
    ...props
}) => {
    const [isEditing, setEditing] = useState(false);
    useEffect(() => {
         if (childRef && childRef.current && isEditing === true) {
             childRef.current.select();
         }
     }, [isEditing, childRef]);
    
    return (
        <section {...props}>
            {isEditing ? (
                <div
                  onBlur={() => setEditing(false)}
                >
                {children}
                  </div>
            ) : (
                <div
                  onClick={() => setEditing(true)}
                  onFocus={() => setEditing(true)}
                >
                  <div>
                      <input className="rect-std" placeholder={value !== '' ? value : 'password'} />
                  </div>
                </div>
            )}
        </section>
    )
};

export default InputPwd;