import {React, useState} from 'react';
import './WorkItem.css';


function WorkItem (props) {

    function canDelete() {
        if (localStorage.getObject(props.userId + '_work')) {
            if (localStorage.getObject(props.userId + '_work').length > props.index) {
                if (localStorage.getObject(props.userId + '_work')[props.index].title === props.object.title) {
                    return true
                }
            }
        }
    }

    function handleDelete(e) {
        const target = e.target.parentElement.parentElement.firstChild.innerHTML
        const workArray = props.data
        workArray.forEach(item => {
            if ((item.title + ' at ' + item.company) === target) {
        const index = workArray.findIndex(obj => obj.title === item.title)
        workArray.splice(index, 1)
        props.update(workArray)
        props.save();
            }
        })
    }
    function handleExpand(e) {
        const expandable = e.target.parentElement.parentElement.nextSibling.firstChild
        if (e.target.innerHTML === 'expand') {
        expandable.hidden = false
        e.target.innerHTML = 'hide'
        } else if (e.target.innerHTML === 'hide') {
            expandable.hidden = true
            e.target.innerHTML = 'expand' 
        }
    }
    function filterDuties(dutyArray) {
        const duties = dutyArray.filter(duty => duty !== 'what did you do in this position?')
        return duties
    }
    return (
        <div className="preview-item" id={props.object.title}>
            <li>
                <h3>{props.object.title} at {props.object.company}</h3>
                <div className="delete-storage">
                { canDelete()
                ? <button className="delete-button" onClick={handleDelete}>delete</button>
                : null }
                </div>
                <div className="expand-preview">
                    <button onClick={handleExpand}>expand</button>
                </div>
            </li>
            
            <div className="expand-wrap">
                <ul className="expandable" hidden>
                    {props.object.monthOne + ' ' + props.object.yearOne + ' - ' + props.object.monthTwo + ' ' + props.object.yearTwo}
                    <section className="expand-duties">
                        <p className="prev-duty">{filterDuties(props.object.duties)[0]}</p>
                        <p className="prev-duty">{filterDuties(props.object.duties)[1]}</p>
                        <p className="prev-duty">{filterDuties(props.object.duties)[2]}</p>
                    </section>
                </ul>
            </div>
            
        </div>
    )
}

export default WorkItem;

//localStorage.getObject('work') && localStorage.getObject('work').length <= props.index && localStorage.getObject('work')[props.index].title === props.object.title