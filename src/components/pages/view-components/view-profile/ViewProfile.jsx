import { React } from 'react';

function ViewProfile (props) {

    const profile = localStorage.getItem(props.userId + '_profile')
    return (
        <div className="view-wrapper profile">
            <h3>PROFILE</h3>
            <p id="view-profile">{profile}</p>
        </div>
    )
}

export default ViewProfile;