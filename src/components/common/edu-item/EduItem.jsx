import {React, useState} from 'react';
import './EduItem.css';


function EduItem (props) {

    function canDelete() {
        if (localStorage.getObject(props.userId + '_education')) {
            if (localStorage.getObject(props.userId + '_education').length > props.index) {
                if (localStorage.getObject(props.userId + '_education')[props.index].loc === props.object.loc) {
                    return true
                }
            }
        }
    }

    function handleDelete(e) {
        const target = e.target.parentElement.parentElement.id
        console.log(target)
        const eduArray = props.data
        eduArray.forEach(item => {
            if (item.loc === target) {
            const index = eduArray.findIndex(obj => obj.loc === item.loc)
            eduArray.splice(index, 1)
            props.update(eduArray)
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
        <div id={props.object.loc}>
            <li>
            {props.object.degree} at {props.object.loc}
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

export default EduItem;

//localStorage.getObject('work') && localStorage.getObject('work').length <= props.index && localStorage.getObject('work')[props.index].title === props.object.title