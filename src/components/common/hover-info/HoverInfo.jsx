import React, { useRef, useState } from 'react';
import './HoverInfo.css';
import { useOutsideClick, MonthUl } from '..'

function HoverInfo (props) {
    
    return (
        <div className='hover-box'>
            <p className="box-text">{props.text}</p>
        </div>
    )
}

export default HoverInfo;