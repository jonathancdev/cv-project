import React, { useState, useEffect } from "react";
import './InputStd.css'

const InputStd = ({
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
                <div className="input-std-div"
                  onBlur={() => setEditing(false)}
                >
                {children}
                  </div>
            ) : (
                <div className="input-std-div"
                  onClick={() => setEditing(true)}
                  onFocus={() => setEditing(true)}
                >
                  <div>
                      <input className="rect-std" placeholder={value} readOnly={true}/>
                  </div>
                </div>
            )}
        </section>
    )
};

export default InputStd;