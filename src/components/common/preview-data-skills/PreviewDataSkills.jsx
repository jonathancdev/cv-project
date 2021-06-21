import React from 'react';
import './PreviewDataSkills.css';
import { removeStorage } from '../../common'

function PreviewDataSkills (props) {
    log(props.data)
    log(Object.keys(localStorage).filter(i => i.includes('skill')).sort())
	const count = props.data.length;
	function previewItem (index) {
        const keys = Object.keys(localStorage).filter(item => item.includes('skill')).sort()
		const item = props.data[index];
        const storeCompare = localStorage.getObject(keys[index])
		if (item) {
        	return (
                <li key={index}>
                    <div className="skill-preview-item" id={index}>
				{item}
                <div className="delete-storage">
                    {item === storeCompare
                    ? <button onClick={handleDelete}>delete</button>
                    : null}
                </div>
            	</div>
                </li>
            )
		} else {
			return null
		}
    }

    function handleDelete (e) {
        const index = e.target.parentElement.parentElement.id
        const keys = Object.keys(localStorage).filter(item => item.includes('skill')).sort()
        removeStorage(keys[index])
        //props.updateParent()
    }
    const array = [
        previewItem(0),
        previewItem(1),
        previewItem(2),
        previewItem(3),
        previewItem(4),
        previewItem(5),
        previewItem(6),
        previewItem(7)
    ]

function render () {
    if (count >= 1) {
        let items = []
        items = array.slice(0, count)
        return items
    } else {
        return null;
    }
}
    return (
        <ul key={props.data}>{render()}</ul>
    )
}

export default PreviewDataSkills;