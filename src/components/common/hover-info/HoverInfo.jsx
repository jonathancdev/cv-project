import React from 'react';
import './HoverInfo.css';

function HoverInfo (props) {
    
    return (
        <div className='hover-box'>
            <p className="box-text">{props.text}</p>
        </div>
    )
}

export default HoverInfo;