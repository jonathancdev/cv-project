import React from 'react';
import './PreviewDataEdu.css';
import { removeStorage, EduItem } from '../../common'

function PreviewDataEdu (props) {
    return (
        <ul className="preview-data">
            {props.data.map((item, i) => <li><EduItem userId={props.userId} index={i} data={props.data} key={item.loc} update={props.updateParent} object={item} show={props.show}/></li>)}
        </ul>
    )

}
export default PreviewDataEdu;
