import React, { useState, useRef } from 'react';
import './Photo.css';
import PhotoInput from '../photo-input'
import {SaveSection, checkStorage} from '../../common'

function Photo () {

    //checks if items are already in localstorage for init
    const [userAvatar, setUserAvatar] = useState(() => {
        if (checkStorage('avatar')) {
            return localStorage.getItem('avatar');
        } else {
            return ''
        }
    });

    const [filePath, setFilePath] = useState(() => {
        if (checkStorage('path')) {
            return localStorage.getItem('path');
        } else {
            return ''
        }
    });

    const avatarDisplay = useRef(null);

    function updatePath(path) {
        setFilePath(path)
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
                    {userAvatar !== '' && userAvatar !== localStorage.getItem('avatar')
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={userAvatar} //object or info required before saving
                    requiredB={filePath}
                    storageName="avatar"
                    storageNameB="path"
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <PhotoInput path={filePath} updatePath={updatePath} updateAvatar={updateAvatar}/>
                    <div>
                        {userAvatar === '' ?
                        <i className="far fa-grin"></i> :
                        <img id="avatar-display" ref={avatarDisplay} src={userAvatar} alt="user"></img>
                        }
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Photo;