import {React, useState} from 'react';
import './WorkItem.css';


function WorkItem (props) {

    function canDelete() {
        if (localStorage.getObject('work')) {
            if (localStorage.getObject('work').length > props.index) {
                if (localStorage.getObject('work')[props.index].title === props.object.title) {
                    return true
                }
            }
        }
    }

    function handleDelete(e) {
        const target = e.target.parentElement.parentElement.id
        const workArray = props.data
        workArray.forEach(item => {
            if (item.title === target) {
            const index = workArray.findIndex(obj => obj.title === item.title)
            workArray.splice(index, 1)
            props.update(workArray)
            props.save();
            }
        })
    }
    function handleExpand(e) {
        const expandable = e.target.parentElement.parentElement.firstChild.nextSibling
        if (e.target.innerHTML === 'expand') {
        expandable.hidden = false
        e.target.innerHTML = 'hide'
        } else if (e.target.innerHTML === 'hide') {
            expandable.hidden = true
            e.target.innerHTML = 'expand' 
        }
 
    }
    return (
        <div id={props.object.title}>
            <li>
            {props.object.title} at {props.object.company}
            </li>
            <ul className="expandable" hidden>
                   {props.object.monthOne}
               </ul>
               <div className="expand-preview">
                   <button onClick={handleExpand}>expand</button>
               </div>
            <div className="delete-storage">
        { canDelete()
        ? <button className="delete-button" onClick={handleDelete}>delete</button>
        : null }
        </div>
        </div>
    )
}

export default WorkItem;

//localStorage.getObject('work') && localStorage.getObject('work').length <= props.index && localStorage.getObject('work')[props.index].title === props.object.title