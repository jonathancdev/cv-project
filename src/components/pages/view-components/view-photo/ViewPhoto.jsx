import { React, useState, useEffect, useRef } from 'react';

function ViewPhoto () {

    const [state1, setState1] = useState('state');
    const photo = localStorage.getItem('avatar')
    return (
        <div className="view-wrapper photo">
            <img id="view-avatar" src={photo} alt="photo"></img>
        </div>
    )
}

export default ViewPhoto;