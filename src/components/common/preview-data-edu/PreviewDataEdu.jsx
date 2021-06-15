import React from 'react';
import './PreviewDataEdu.css';
import { removeStorage } from '../../common'

function PreviewDataEdu (props) {
	const count = props.data.length;

	function previewItem (index) {
        const keys = Object.keys(localStorage).filter(item => item.includes('eduExp'))
		const item = props.data[index];
        const storeCompare = localStorage.getObject(keys[index])
		if (item) {
        	return (<div className="edu-preview-item" id={index}>
				    {item.degree + ' from ' + item.loc}
                <div className="delete-storage">
                    {JSON.stringify(item) === JSON.stringify(storeCompare)
                    ? <button onClick={handleDelete}>delete</button>
                    : null}
                </div>
            	</div>)
		} else {
			return null
		}
    }
    function handleDelete (e) {
        const index = e.target.parentElement.parentElement.id
        const keys = Object.keys(localStorage).filter(item => item.includes('eduExp'))
        removeStorage(keys[index])
        props.updateParent()
    }
    function render () {
        if (count >= 1) {
            let items = []
            items = array.slice(0, count)
            return items
        } else {
            return null;
        }
    }
    const array = [
        previewItem(0),
        previewItem(1),
        previewItem(2),
        previewItem(3),
        previewItem(4)
    ]

    return (
        <ul key={props.data}>{render()}</ul>
    )

}

export default PreviewDataEdu;