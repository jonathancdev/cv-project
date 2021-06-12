import React from 'react';
import './PreviewDataSkills.css';

function PreviewDataSkills (props) {
    console.log(props.data)
	const count = props.data.length;

	function previewItem (index) {
		const item = props.data[index];
		if (item) {
        	return (<div>
				{item}
            	</div>)
		} else {
			return null
		}
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

    if (count >= 1) {
        let items = []
        items = array.slice(0, count)
        return items
    } else {
        return null;
    }

}

export default PreviewDataSkills;