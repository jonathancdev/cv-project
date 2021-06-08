import React, { useRef } from 'react';
import InputStd from '../editable-forms/input-std'

function Duties (props) {

    const dutyRef = useRef();
    const count = props.dutyCount

    function inputStd (index) {

        return (<InputStd
            childRef={dutyRef}
            value={props.value[index]}
            >
                <input
                    ref={dutyRef}
                    className="rect-std"
                    placeholder='enter duty'
                    value={props.value[index]}
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