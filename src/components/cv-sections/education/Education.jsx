import React from 'react';
import './Education.css';

function Education () {
    return (
        <section className="cv-sec-wrap">
            <section className="education cv-section">
            <section className="cv-header">
                    <h1>Add your education history</h1>
                    <button className="help-btn">
                        <i class="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">
                        <div>
                            <p>add new item</p>
                            <button className="add-btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        <input className="rect-std" placeholder="institution"></input>
                        <input className="rect-std" placeholder="type of degree or certificate"></input>
                        <input className="rect-std" placeholder="description"></input>
                        <div>
                            <p>graduated</p>
                            <input type="month" className="rect-date month" placeholder="month"></input>
                            <input type="year" className="rect-date year" placeholder="year"></input>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Education;