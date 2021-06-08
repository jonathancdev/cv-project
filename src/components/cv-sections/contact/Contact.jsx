import React from 'react';
import './Contact.css';

function Contact () {
    return (
        <section className="cv-sec-wrap">
            <section className="contact cv-section">
                <section className="cv-header">
                    <h1>Add your contact information</h1>
                    <button className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">
                        <input className="rect-std" placeholder="telephone"></input>
                        <input className="rect-std" placeholder="email"></input>
                        <textarea className="rect-long" placeholder="address"></textarea>
                        <input className="rect-std" placeholder="website"></input>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Contact;