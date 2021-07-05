import { React, useState, useEffect, useRef } from 'react';

function ViewPhoto (props) {

    const photo = localStorage.getItem(props.userId + '_avatar')
    console.log(photo)
    return (
        <div className="view-wrapper photo">
            <div className="photo-border">
                {photo === 'disabled'
                ? null
            : <img id="view-avatar" src={photo} alt="photo"></img>}
            </div>
        </div>
    )
}

export default ViewPhoto;