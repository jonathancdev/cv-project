import React, { createRef, useState } from 'react';
import './MonthDrop.css';
import { MonthLi } from '../../common'

function MonthDrop (props) {
    const monthDisplay = createRef();
    const monthList = createRef();
    const [ hideList, setHideList ] = useState(true)

    function hideUl () {
        setHideList(true);
    }

    return (
        <section>
            <input ref={monthDisplay} id={props.id} className="rect-date month" placeholder='month' value={props.value} disable></input>
            <button onClick={() => setHideList(prevHide => !prevHide)} className="false-month"></button>
                {hideList ? (
                    null
                ) : (
                <ul ref={monthList} className="monthDropDown">
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="January"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="February"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="March"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="April"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="May"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="June"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="July"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="August"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="September"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="October"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="November"></MonthLi>
                    <MonthLi set={props.setMonth} hide={hideUl} input={monthDisplay} month="December"></MonthLi>
                </ul>
                ) } 
        </section>
    )
}

export default MonthDrop;