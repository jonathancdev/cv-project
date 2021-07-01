import { React, useState, useEffect, useRef } from 'react';

function ViewWork (props) {

    const [state1, setState1] = useState('state');
    const work = localStorage.getObject(props.userId + '_work')
    return (
        <div className="view-wrapper work">
            <p id="view-Work">{work[0].title} at {work[0].company}</p>
        </div>
    )
}

export default ViewWork;