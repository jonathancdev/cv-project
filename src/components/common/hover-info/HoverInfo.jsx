import React, { useEffect, useState } from 'react';
import './HoverInfo.css';

function HoverInfo (props) {

    const [classes, setClasses] = useState('hover-box')

    useEffect(() => {
        setInterval(() => {
            setClasses('hover-box close')
        }, 2500)
      }, []);
    
console.log(classes)
    return (
        <div className={classes}>
            <p className="box-text">{props.text}</p>
        </div>
    )
}

export default HoverInfo;