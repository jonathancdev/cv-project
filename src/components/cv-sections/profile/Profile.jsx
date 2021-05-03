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
            </section>
        </section>
    )
}

export default Profile;