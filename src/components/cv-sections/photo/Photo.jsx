import React, { useState, useRef, useEffect } from 'react';
import './Photo.css';
import PhotoInput from '../photo-input'
import {SaveSection, checkStorage, removeStorage} from '../../common'

function Photo (props) {

    useEffect( () => {
        return () => {
            props.updateComplete()
        }
    }, [])

    //checks if items are already in localstorage for init
    const [userAvatar, setUserAvatar] = useState(() => {
        if (checkStorage(props.userId + "_avatar")) {
            return localStorage.getItem(props.userId + "_avatar");
        } else {
            return ''
        }
    });

    const [filePath, setFilePath] = useState(() => {
        if (checkStorage(props.userId + "_path")) {
            return localStorage.getItem(props.userId + "_path");
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
    function handleDelete () {
        removeStorage(props.userId + "_avatar")
        removeStorage(props.userId + "_path")
        updateAvatar('')
        updatePath('')
        props.updateComplete()
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
                    {userAvatar !== '' && userAvatar !== localStorage.getItem(props.userId + "_avatar")
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={userAvatar} //object or info required before saving
                    requiredB={filePath}
                    storageName={props.userId + "_avatar"}
                    storageNameB={props.userId + "_path"}
                    updateParents={props.updateComplete}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <PhotoInput path={filePath === '' ? 'click to browse files' : filePath} updatePath={updatePath} updateAvatar={updateAvatar}/>
                    <div>
                        {userAvatar === '' ?
                        <i className="far fa-grin"></i> :
                        <img id="avatar-display" ref={avatarDisplay} src={userAvatar} alt="user"></img>
                        }
                    </div>
                </section>
                <div className='delete-storage'>
                    {filePath !== ''
                    ?<button onClick={handleDelete}>delete</button>
                    : null}
                </div>
            </section>
        </section>
    )
}

export default Photo;