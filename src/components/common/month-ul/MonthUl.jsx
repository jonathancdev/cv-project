import React, { createRef } from 'react';
import './MonthUl.css';
import { MonthLi } from '../../common';

function MonthUl (props) {
    
    return (

        <ul className="monthDropDown">
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="January"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="February"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="March"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="April"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="May"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="June"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="July"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="August"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="September"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="October"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="November"></MonthLi>
            <MonthLi set={props.set} hide={props.hide} input={props.input} month="December"></MonthLi>
        </ul>
    )
}

export default MonthUl;