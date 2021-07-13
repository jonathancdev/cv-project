import React from 'react';
import './SkillItem.css';

function SkillItem (props) {
    function handleDelete(e) {
        const target = e.target.parentElement.parentElement.firstChild.innerText
        const skillArray = props.data
        skillArray.forEach(item => {
            if (item === target) {
            const index = skillArray.indexOf(item)
            skillArray.splice(index, 1)
            props.update(skillArray)
            props.show()
            }
        })
    }
    return (
        <div className="preview-item" id={props.listId} key={props.giveKey}>
            <div>
                <h3>{props.skill}</h3>
                {localStorage.getObject(props.userId + '_skills') && localStorage.getObject(props.userId + '_skills').includes(props.skill)
        ? <div className="delete-storage">
        <button className="delete-button" onClick={handleDelete}>delete</button>
        </div>
        : null }
            </div>
        </div>
    )
}

export default SkillItem;