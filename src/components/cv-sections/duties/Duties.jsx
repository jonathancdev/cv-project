import React, { useRef } from 'react';
import InputStd from '../editable-forms/input-std'

function Duties (props) {
    console.log(props.value)
    const dutyRef = useRef();
    const count = props.dutyCount
    function handleDelete(e) {
        const array = props.value
        const index = e.target.parentElement.parentElement.id
        props.update(count - 1)
        array[index] = 'what did you do in this position?'

    }
    function inputStd (index) {

        return (<div id={index}>
            <InputStd
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
            </InputStd>
            <div className="delete-storage">
                <button onClick={handleDelete}>delete</button>
            </div>
        </div>)
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