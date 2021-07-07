import React from 'react';
import './SkillItem.css';
import {removeStorage} from '../../common'

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
        <div className="preview-item" id={props.listId}>
            <li>
                <h3>{props.skill}</h3>
                {localStorage.getObject(props.userId + '_skills') && localStorage.getObject(props.userId + '_skills').includes(props.skill)
        ? <div className="delete-storage">
        <button className="delete-button" onClick={handleDelete}>delete</button>
        </div>
        : null }
            </li>
        </div>
    )
}

export default SkillItem;