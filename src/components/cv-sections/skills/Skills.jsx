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
                            <section className="duties-wrap">
                                {/* <div>
                                    <p>add skill</p>
                                    <button className="add-btn" onClick={this.renderNew}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            <Skills
                                value={this.state.duties}
                                setDuty={this.setDuty}
                                setDutyCount={this.setDutyCount}
                                dutyCount={this.state.dutyCount}
                            >
                            </Skills> */}
                            
                            </section>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Skills;