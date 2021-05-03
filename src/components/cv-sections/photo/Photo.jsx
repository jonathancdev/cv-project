import React from 'react';
import './Photo.css';

function Photo () {
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
                    <input className="rect-std" placeholder="click + to add photo" disabled></input>
                    <input id="browse-btn" type="file" hidden></input>
                    <label for="browse-btn" id="btn-lbl"><i class="fas fa-plus"></i></label>
                    <button>submit</button>
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