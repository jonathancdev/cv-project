import React, { useState, useEffect } from "react";

const Editable = ({
    childRef,
    text,
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
    }, [isEditing, childRef]);
    const handleKeyDown = (event, type) => {

    };

    return (
        <section {...props}>
            {isEditing ? (
                <div
                  onBlur={() => setEditing(false)}
                  onKeyDown={e => handleKeyDown(e, type)}
                >
                {children}
                  </div>
            ) : (
                <div
                  onClick={() => setEditing(true)}
                >
                  <span>
                      {text || placeholder || "Editable content"}
                  </span>
                </div>
            )}
        </section>
    )
};

export default Editable;