import { React, useState, useEffect, useRef } from 'react';

function ViewEducation (props) {

    const edu = localStorage.getObject(props.userId + '_education')
    console.log(edu)

    function createEduItems() {
        return edu.map((obj) => {
            return <div className="item-wrap">
                <h4>{obj.loc}</h4>
                <div className="view-company-dates">
                    <h5>{obj.degree}</h5>
                    <p className="view-dates">Graduated {obj.monthOne} {obj.yearOne}</p>
                </div>
                {obj.desc !== 'description' ?
                <p>{obj.desc}</p>
                : null}
                    </div>
        })
    }

    return (
        <div className="view-wrapper education">
            <h3>EDUCATION</h3>
            {createEduItems()}
        </div>
    )
}

export default ViewEducation;