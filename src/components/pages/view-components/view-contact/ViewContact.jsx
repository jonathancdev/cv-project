import { React, useState, useEffect, useRef } from 'react';

function ViewContact (props) {

    const [state1, setState1] = useState('state');
    const contact = localStorage.getObject(props.userId + '_contact')
    return (
        <div className="view-wrapper contact">
            <p id="view-contact">{contact[0].tel}</p>
        </div>
    )
}

export default ViewContact;