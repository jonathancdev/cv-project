import React, { useState, useRef, useEffect } from 'react';
import './Photo.css';
import PhotoInput from '../photo-input'
import {SaveSection, checkStorage, removeStorage, HoverInfo} from '../../common'
import img from '../../../img/AI_photo.jpg'

function Photo (props) {

    const [noAvatar, setNoAvatar] = useState(false);
    const [hovered, setHovered] = useState(false);
    const avatarDisplay = useRef(null);
    const checkbox = useRef(null)

    useEffect( () => {
        if (userAvatar === 'disabled') {
            setNoAvatar(true)
            checkbox.current.checked = true
        } else if (userAvatar === 'enabled') {
            setNoAvatar(false)
            checkbox.current.checked = false
        }
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
    function onHoverIn() {
        setHovered(true)
    }
    function onHoverOut() {
        setHovered(false)
    }
    function handleCheckbox () {
        if(checkbox.current.checked) {
        setFilePath('photo disabled')
        updateAvatar('disabled')
        setNoAvatar(true)
        } else {
            updateAvatar('enabled')
            updatePath('click to browse files')
            setNoAvatar(false)
            checkbox.current.checked = false
        }
    }
    console.log(userAvatar)
    return (
        <section className="cv-sec-wrap">
            <section className="photo cv-section">
                <section className="cv-header">
                    <h1>Add a photo</h1>
                    <button onMouseEnter={onHoverIn} onMouseLeave={onHoverOut} className="help-btn">
                        {hovered
                        ? <HoverInfo
                            text="Upload a high-quality, high-resolution photo. Avoid busy backgrounds! A headshot from the shoulders
                                    up is recommended. You can upload a .png, .jpg, .jpeg, or .gif file."
                            ></HoverInfo>
                        : null }
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
                    {!noAvatar
                    ? <PhotoInput path={filePath === '' ? 'click to browse files' : filePath} updatePath={updatePath} updateAvatar={updateAvatar}/>
                    : <section><input className="rect-std" placeholder={filePath} disabled/></section>}
                    <div>
                        {userAvatar === '' || userAvatar === 'enabled' ?
                        <i className="far fa-grin"></i> :
                        <>
                        { noAvatar && userAvatar !== 'enabled' ?
                         <div className="blank-avatar"><i class="far fa-dizzy"></i></div>
                        : <img id="avatar-display" ref={avatarDisplay} src={ props.userId === 'cvIDJ4B6P12' && userAvatar === 'test user' ? img : userAvatar} alt="user"></img>}
                        </>
                        }
                    </div>
                </section>
                <div className="no-photo">
                    <input ref={checkbox} type="checkbox" onClick={handleCheckbox} className="photo-check"/>
                    <p>check this box if you prefer not to include a photo</p>
                </div>
                <div className='delete-storage'>
                    {filePath !== '' && filePath !== 'photo disabled' && filePath !=='click to browse files'
                    ?<button onClick={handleDelete}>delete</button>
                    : null}
                </div>
            </section>
        </section>
    )
}

export default Photo;