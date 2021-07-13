import React from 'react';
import './PreviewDataSkills2.css';
import { SkillItem } from '..'

function PreviewDataSkills2 (props) {
    return (
        <ul className="preview-data">
            {props.data.map((item) => <li><SkillItem userId={props.userId} data={props.data} update={props.updateParent} giveKey={item[1]} listId={item[1]} skill={item} show={props.show}/></li>)}
        </ul>
    )

    }
export default PreviewDataSkills2;