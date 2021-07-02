import { React, useState, useEffect, useRef } from 'react';

function ViewWork (props) {

    const work = localStorage.getObject(props.userId + '_work')

    function createWorkItems() {
        return work.map((obj) => {
            const duties = obj.duties
            console.log(duties)
            return <div className="item-wrap">
                        <h4>{obj.title}</h4>
                        <div className="view-company-dates">
                            <h5>{obj.company}</h5>
                            <p className="view-dates">{obj.monthOne} {obj.yearOne} to {obj.monthTwo} {obj.yearTwo}</p>
                        </div>
                        <ul className="view-duties">
                            {duties.map(duty => {
                                return <li>{duty}</li>
                            })}
                        </ul>
                    </div>
        })
    }
    return (
        <div className="view-wrapper work">
            {createWorkItems()}
        </div>
    )
}

export default ViewWork;