import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import TitleForm from '../editable-forms/workexperience'

class WorkExperience extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
 }
render() {
    return (
        <section className="cv-sec-wrap">
            <section className="work-experience cv-section">
                <section className="cv-header">
                        <h1>Add your work experience</h1>
                        <button className="help-btn">
                            <i className="far fa-question-circle"></i>
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
            {/* form starts here */}
                        <TitleForm
                        childRef={this.inputRef}
                        >
                            {/* isEditing input */}
                            <input
                                refA={this.inputRef}
                                className="rect-std"

                            />
                        </TitleForm>
                        <input className="rect-std" placeholder="company name"></input>

                        <div>
                            <p>from</p>
                            <input type="month" className="rect-date month" placeholder="month"></input>
                            <input type="year" className="rect-date year" placeholder="year"></input>
                            <p>to</p>
                            <input type="month" className="rect-date month" placeholder="month"></input>
                            <input type="year" className="rect-date year" placeholder="year"></input>
                        </div>

                        <div>
                            <p>add job duty</p>
                            <button className="add-btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>

                        <input className="rect-std" placeholder="what did you do in this position?"></input>
            {/* form ends here */}

                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;