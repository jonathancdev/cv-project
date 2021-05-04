import React from 'react';
import './Skills.css';

function Skills () {
    return (
        <section className="cv-sec-wrap">
            <section className="skills cv-section">
                <section className="cv-header">
                    <h1>Add your skills</h1>
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
                        <input className="rect-std" placeholder="skill"></input>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Skills;