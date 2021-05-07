import React, { useState, useRef } from 'react';
import './Photo.css';
import PhotoInput from '../photo-input'

function Photo () {
    const [fileName, setFileName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const avatarDisplay = useRef(null);
    const testDiv = useRef(null);
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
                        <i class="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="sec-form-wrap">
                    <PhotoInput fileName={fileName} update={update} updateAvatar={updateAvatar}/>
                    <div>
                        {userAvatar === '' ?
                        <i class="far fa-user-circle"></i> :
                        <img id="avatar-display" ref={avatarDisplay} src={userAvatar}></img>
                        }
                    </div>

                </section>
            </section>
        </section>
    )
}

export default Photo;