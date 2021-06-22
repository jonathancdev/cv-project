import { React, useState, useEffect, useRef } from 'react';

function ViewWork () {

    const [state1, setState1] = useState('state');
    const work = localStorage.getObject('work')
    console.log(work)
    return (
        <div className="view-wrapper work">
            <p id="view-Work">{work[0].title} at {work[0].company}</p>
        </div>
    )
}

export default ViewWork;