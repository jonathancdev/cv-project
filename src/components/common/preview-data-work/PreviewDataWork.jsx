import React from 'react';
import './PreviewDataWork.css';
import { removeStorage, WorkItem } from '../../common'

function PreviewDataWork (props) {
    return (
        <ul className="preview-data">
            {props.data.map((item, i) => <li><WorkItem userId={props.userId} index={i} data={props.data} key={item.title} update={props.updateParent} object={item} show={props.show}/></li>)}
        </ul>
    )

}

export default PreviewDataWork;