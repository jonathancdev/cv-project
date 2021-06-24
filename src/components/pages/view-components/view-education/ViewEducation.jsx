import { React, useState, useEffect, useRef } from 'react';

function ViewEducation (props) {

    const [state1, setState1] = useState('state');
    const education = localStorage.getObject(props.userId + '_education')
    console.log(education)
    return (
        <div className="view-wrapper education">
            <p id="view-Education">{education[0].degree} at {education[0].loc}</p>
        </div>
    )
}

export default ViewEducation;