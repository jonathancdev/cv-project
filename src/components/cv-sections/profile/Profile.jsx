import React from 'react';
import './Profile.css';

function Profile () {
    return (
        <section className="cv-sec-wrap">
            <section className="profile cv-section">
                <section className="cv-header">
                    <h1>Add your personal profile</h1>
                    <button className="help-btn">
                        <i class="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="sec-form-wrap">
                    <section className="mult-form">
                    <p>Enter your profile here</p>
                    <input className="rect-std" placeholder="add your personal profile"></input>
                    <button className="edit-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Profile;