import React from 'react';
import './Photo.css';

function Photo () {
    return (
        <section className="cv-sec-wrap">
            <section className="photo cv-section">
                <h1>Add a photo</h1>
                <button className="help-btn">
                    <i class="far fa-question-circle"></i>
                </button>
            </section>
        </section>
    )
}

export default Photo;