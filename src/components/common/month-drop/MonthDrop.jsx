import React, { useRef, useState } from 'react';
import './MonthDrop.css';
import { useOutsideClick, MonthUl } from '../../common'

function MonthDrop (props) {
    const monthDisplay = useRef();
    const area = useRef();
    const [ hideList, setHideList ] = useState(true)
    const outsideClick = useOutsideClick(area, hideUl)

    function hideUl () {
        setHideList(true);
    }

    return (
        <div ref={area}>
            <input id={props.id} ref={monthDisplay} className="rect-date month" placeholder='month' value={props.value} disable></input>
            <button onClick={() => setHideList(prevHide => !prevHide)} className="false-month"></button>
                {hideList ? 
                    null
                 : <MonthUl set={props.setMonth} input={monthDisplay} hide={hideUl}/>
                 } 
        </div>
    )
}

export default MonthDrop;