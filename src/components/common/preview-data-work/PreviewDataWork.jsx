import React from 'react';
import './PreviewDataWork.css';
import { removeStorage, WorkItem } from '../../common'

function PreviewDataWork (props) {

    const array = props.data
    return (
        <ul className="preview-data">
            {array.map((item, i) => <li><WorkItem userId={props.userId} index={i} data={props.data} save={props.save} key={item.title} update={props.updateParent} object={item}/></li>)}
        </ul>
    )

}

export default PreviewDataWork;