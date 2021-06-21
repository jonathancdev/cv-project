import React from 'react';
import './SkillItem.css';
import {removeStorage} from '..'

function SkillItem (props) {
    function handleDelete(e) {
        const target = e.target.parentElement.parentElement.firstChild.innerText
        const skillArray = props.data
        skillArray.forEach(item => {
            if (item === target) {
            const index = skillArray.indexOf(item)
            skillArray.splice(index, 1)
            props.update(skillArray)
            props.save();
            }
        })
        //const index = array.indexOf(textContent)
        //array.splice(index, 1)
        //props.update(array)
        //props.save()
        //removeStorage('skill' + storageIndex)
    }
    return (
        <div id={props.listId}>
            <li>
            {props.skill}
            </li>
        {localStorage.getObject('skill') && localStorage.getObject('skill').includes(props.skill)
        ? <div className="delete-storage">
        <button className="delete-button" onClick={handleDelete}>delete</button>
        </div>
        : null }
        </div>
    )
}

export default SkillItem;