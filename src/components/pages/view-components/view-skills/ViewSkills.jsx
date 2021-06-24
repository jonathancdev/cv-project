import { React, useState, useEffect, useRef } from 'react';

function ViewSkills (props) {

    const [state1, setState1] = useState('state');
    const skills = localStorage.getObject(props.userId + '_skills')
    console.log(skills)
    return (
        <div className="view-wrapper skills">
            <p id="view-skills">{skills[0]} at {skills[0]}</p>
        </div>
    )
}

export default ViewSkills;