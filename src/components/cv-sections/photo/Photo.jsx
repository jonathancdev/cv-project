import React, { useState, useRef } from 'react';
import './Photo.css';
import PhotoInput from '../photo-input'
import {SaveSection} from '../../common'

function Photo () {
    const [fileName, setFileName] = useState('');
    const [userAvatar, setUserAvatar] = useState(localStorage.getItem("avatar") || '');
    const avatarDisplay = useRef(null);

    function update(name) {
        setFileName(name);
    }
    function updateAvatar(file) {
        setUserAvatar(file);
    }
    return (
        <section className="cv-sec-wrap">
            <section className="photo cv-section">
                <section className="cv-header">
                    <h1>Add a photo</h1>
                    <button className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                    {userAvatar !== ''
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={userAvatar} //object or info required before saving
                    storageName="avatar"
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <PhotoInput fileName={fileName} update={update} updateAvatar={updateAvatar}/>
                    <div>
                        {userAvatar === '' ?
                        <i className="far fa-grin"></i> :
                        <img id="avatar-display" fileName={fileName} ref={avatarDisplay} src={userAvatar} alt="user"></img>
                        }
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Photo;