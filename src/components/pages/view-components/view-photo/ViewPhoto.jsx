import { React, useState, useEffect, useRef } from 'react';

function ViewPhoto (props) {

    const [state1, setState1] = useState('state');
    const photo = localStorage.getItem(props.userId + '_avatar')
    return (
        <div className="view-wrapper photo">
            <img id="view-avatar" src={photo} alt="photo"></img>
        </div>
    )
}

export default ViewPhoto;