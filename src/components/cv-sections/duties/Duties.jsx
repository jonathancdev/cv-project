import React, { useRef } from 'react';
import InputStd from '../editable-forms/input-std'

function Duties (props) {
    console.log(props.value)
    const dutyRef = useRef();
    const count = props.dutyCount
    function handleDelete(e) {
        const array = props.value
        const target = e.target.parentElement.parentElement.id
        const index = array.indexOf(target)
        array[index] = 'what did you do in this position?'
        //console.log(target)
        //console.log(index)
        props.update(count - 1)
        orderArray(array, index, 2)

    }
    function orderArray(array, fromIndex, toIndex) {
        const element = array[fromIndex]
        array.splice(fromIndex, 1)
        array.splice(toIndex, 0, element)
        return array
    }

    function inputStd (index) {

        return (<div key={index} id={props.value[index]}>
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
                    maxLength="100"
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