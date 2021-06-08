import React from 'react';
import './MonthLi.css';

function MonthLi (props) {

    function selectMonth (e) {
        props.input.current.value = e.target.innerHTML;
        props.set(e);
        props.hide();
    }

    return (
        <li className="li-item" onClick={selectMonth}>{props.month}</li>
    )
}

export default MonthLi;