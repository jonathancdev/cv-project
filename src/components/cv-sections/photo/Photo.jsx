import React, { useState } from 'react';
import './Photo.css';
import PhotoInput from '../photo-input'

function Photo () {
    const [fileName, setFileName] = useState('');
    function update(name) {
        setFileName(name)
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
                    <PhotoInput fileName={fileName} update={update}/>
                    <div>
                        <img></img>
                        <i class="far fa-user-circle"></i>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Photo;