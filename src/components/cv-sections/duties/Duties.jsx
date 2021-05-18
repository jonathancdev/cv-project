import React, { useState, useRef } from 'react';
import InputStd from '../editable-forms/input-std'

function Duties (props) {

    const dutyRef = useRef();
    // function update(name) {
    //     setFileName(name);
    // }
    const count = props.dutyCount

    function inputStd (index) {

        return (<InputStd
            childRef={dutyRef}
            value={props.value[index]}
            >
                {/* isEditing input */}
                <input
                    ref={dutyRef}
                    className="rect-std"
                    placeholder='enter duty' //placeholder only applicable w/o text
                    value={props.value[index]} //passes value to editable as it updates
                    onChange={(e) => {
                        props.setDuty(e, index);
                    }}
                />
            </InputStd>)
    }

    const array = [
        inputStd(0),
        inputStd(1),
        inputStd(2)
    ]

    if (count === 1) {
        const pick = [array[0]]
        return pick;
    } else if (count === 2){
        const pick = [array[0], array[1]]
        return pick;
    } else if (count === 3) {
        const pick = [array[0], array[1], array[2]]
        return pick;
    } else {
        return null;
    }
    
}


export default Duties;