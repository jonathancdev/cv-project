import React, { useState } from 'react';
import './PreviewData.css';

function PreviewData (props) {
	const count = props.data.length;

	function previewItem (index) {
		const item = props.data[index];
		if (item) {
        	return (<div>
				{item.title + ' at ' + item.company}
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
        previewItem(4)
    ]

    if (count === 1) {
        return [array[0]]
    } else if (count === 2){
        return [array[0], array[1]]
    } else if (count === 3){
        return [array[0], array[1], array[2]]
    } else if (count === 4){
        return [array[0], array[1], array[2], array[3]]
    }else if (count >= 5) {
        return [array[0], array[1], array[2], array[3], array[4]]
    } else {
        return null;
    }

}

export default PreviewData;