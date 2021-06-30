import React from 'react';
import './PreviewDataEdu.css';
import { removeStorage, EduItem } from '../../common'

function PreviewDataEdu (props) {

    const array = props.data
    return (
        <ul className="preview-data">
            {array.map((item, i) => <li><EduItem userId={props.userId} index={i} data={props.data} save={props.save} key={item.loc} update={props.updateParent} object={item}/></li>)}
        </ul>
    )

}
export default PreviewDataEdu;
