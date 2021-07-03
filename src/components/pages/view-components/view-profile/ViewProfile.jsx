import { React, useState, useEffect, useRef } from 'react';

function ViewProfile (props) {

    const [state1, setState1] = useState('state');
    const profile = localStorage.getItem(props.userId + '_profile')
    return (
        <div className="view-wrapper profile">
            <h3>PROFILE</h3>
            <p id="view-profile">{profile}</p>
        </div>
    )
}

export default ViewProfile;