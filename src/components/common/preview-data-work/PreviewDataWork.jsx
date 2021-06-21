import React from 'react';
import './PreviewDataWork.css';
import { removeStorage, WorkItem } from '../../common'

function PreviewDataWork (props) {
	// const count = props.data.length;

	// function previewItem (index) {
    //     const keys = Object.keys(localStorage).filter(item => item.includes('workExp'))
	// 	const item = props.data[index];
    //     const storeCompare = localStorage.getObject(keys[index])
	// 	if (item) {
    //     	return (<div className="work-preview-item" id={index}>
	// 			{item.title + ' at ' + item.company}
    //             <ul className="expandable" hidden>
    //                 {item.monthOne}
    //             </ul>
    //             <div className="expand-preview">
    //                 <button onClick={handleExpand}>expand</button>
    //             </div>
    //             <div className="delete-storage">
    //                 {JSON.stringify(item) === JSON.stringify(storeCompare)
    //                 ? <button onClick={handleDelete}>delete</button>
    //                 : null}
    //             </div>
    //         	</div>)
	// 	} else {
	// 		return null
	// 	}
    // }
    // function handleDelete (e) {
    //     const index = e.target.parentElement.parentElement.id
    //     const keys = Object.keys(localStorage).filter(item => item.includes('workExp'))
    //     removeStorage(keys[index])
    //     props.updateParent()
    // }
    // function handleExpand(e) {
    //     const expandable = e.target.parentElement.parentElement.firstElementChild
    //     if (e.target.innerHTML === 'expand') {
    //     expandable.hidden = false
    //     e.target.innerHTML = 'hide'
    //     } else if (e.target.innerHTML === 'hide') {
    //         expandable.hidden = true
    //         e.target.innerHTML = 'expand' 
    //     }
    // }
    // function render () {
    //     if (count >= 1) {
    //         let items = []
    //         items = array.slice(0, count)
    //         return items
    //     } else {
    //         return null;
    //     }
    // }
    // const array = [
    //     previewItem(0),
    //     previewItem(1),
    //     previewItem(2),
    //     previewItem(3),
    //     previewItem(4)
    // ]

    const array = props.data
    return (
        <ul>
            {array.map((item, i) => <li><WorkItem index={i} data={props.data} save={props.save} key={item.title} update={props.updateParent} object={item}/></li>)}
        </ul>
    )

}

export default PreviewDataWork;