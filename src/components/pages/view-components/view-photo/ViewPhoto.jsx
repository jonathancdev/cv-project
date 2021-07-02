import { React, useState, useEffect, useRef } from 'react';

function ViewPhoto (props) {

    const photo = localStorage.getItem(props.userId + '_avatar')
    return (
        <div className="view-wrapper photo">
            <img id="view-avatar" src={photo} alt="photo"></img>
        </div>
    )
}

export default ViewPhoto;