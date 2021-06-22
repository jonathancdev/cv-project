import { React, useState, useEffect, useRef } from 'react';

function ViewProfile () {

    const [state1, setState1] = useState('state');
    const profile = localStorage.getItem('profile')
    return (
        <div className="view-wrapper profile">
            <p id="view-profile">{profile}</p>
        </div>
    )
}

export default ViewProfile;