import React from 'react';
import './PreviewDataSkills2.css';
import { removeStorage, SkillItem } from '..'

function PreviewDataSkills2 (props) {
    
    const array = props.data
    return (
        <ul className="preview-data">
            {array.map((item) => <li><SkillItem userId={props.userId} data={props.data} save={props.save} update={props.updateParent} key={item[1]} listId={item[1]} skill={item}/></li>)}
        </ul>
    )

    }
export default PreviewDataSkills2;