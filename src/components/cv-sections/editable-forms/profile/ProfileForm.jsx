import React, { useState, useEffect } from "react";
import './ProfileForm.css'

const ProfileForm = ({
    childRef,
    value,
    type,
    placeholder,
    children,
    ...props
}) => {
    const [isEditing, setEditing] = useState(false);
     useEffect(() => {
         if (childRef && childRef.current && isEditing === true) {
             childRef.current.select();
         }
     }, [isEditing, childRef]); //array of things that useEffect depends on, so only fired when they change

    
    const handleKeyDown = (event, type) => {
        //come back to this portion of tutorial
    };
    console.log(childRef)
    return (
        <section {...props}>
            {isEditing ? (
                <div
                  onBlur={() => setEditing(false)}
                  onKeyDown={e => handleKeyDown(e, type)} //come back to this later in tutorial
                >
                {children} {/* editable TextAreaAuto in Profile.jsx */}
                  </div>
            ) : (
                <div
                  onClick={() => setEditing(true)}
                >
                  <div>
                      <input className="rect-std editable" placeholder={value}/>
                  </div>
                </div>
            )}
        </section>
    )
};

export default ProfileForm;