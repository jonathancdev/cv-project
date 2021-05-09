import React, { useState, useEffect } from "react";
import './TitleForm.css'

const TitleForm = ({
    childRef,
    children,
    ...props
}) => {
    const [isEditing, setEditing] = useState(false);
    const [value, setValue ] = useState('enter title')
     useEffect(() => {
         if (childRef && childRef.current && isEditing === true) {
             childRef.current.select();
         }
     }, [isEditing, childRef]);
    
    console.log(childRef)
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
                >
                  <div>
                      <input className="rect-std editable" placeholder={value} />
                  </div>
                </div>
            )}
        </section>
    )
};

export default TitleForm;