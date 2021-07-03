import { React, useState, useEffect, useRef } from 'react';

function ViewSkills (props) {

    const skills = localStorage.getObject(props.userId + '_skills')
    function createSkillItems() {
        return skills.map(skill => {
            return <li>{skill}</li>
        })
    }

    return (
        <div className="view-wrapper skills">
            <h3>SKILLS</h3>
            <ul className="view-skill-list">
            {createSkillItems()}
            </ul>
        </div>
    )
}

export default ViewSkills;