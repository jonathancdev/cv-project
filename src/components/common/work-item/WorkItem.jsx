import {React} from 'react';
import './WorkItem.css';

function WorkItem (props) {

    function handleDelete(e) {
        const target = e.target.parentElement.parentElement.firstChild.innerHTML
        const workArray = props.data
        workArray.forEach(item => {
            if ((item.title + ' at ' + item.company) === target) {
        const index = workArray.findIndex(obj => obj.title === item.title)
        workArray.splice(index, 1)
        props.update(workArray)
        props.show()
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
    const x = localStorage.getObject(props.userId + '_work')
    const y = JSON.stringify(x)
    const z = JSON.stringify(props.object)

    return (
        <div className="preview-item" id={props.object.title}>
            <div>
                <h3>{props.object.title} at {props.object.company}</h3>
                <div className="delete-storage">
                { y.includes(z)
                ? <button className="delete-button" onClick={handleDelete}>delete</button>
                : null }
                </div>
                <div className="expand-preview">
                    <button onClick={handleExpand}>expand</button>
                </div>
            </div>
            
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

