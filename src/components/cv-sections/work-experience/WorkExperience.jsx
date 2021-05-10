import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import TitleForm from '../editable-forms/workexperience'
import { MonthDrop } from '../../common'

class WorkExperience extends Component {
    constructor() {
        super();
        this.titleRef = createRef();
        this.companyRef = createRef();
        this.dutyRef = createRef();
        this.state = {
            title: "click to edit title", 
            company: "click to edit company name",
            duty: "what did you do in this position?"
        };
        this.setTitle = this.setTitle.bind(this)
        this.setCompany = this.setCompany.bind(this)
        this.setDuty = this.setDuty.bind(this)
 }
setTitle (e) {
    const value = e.target.value;
    this.setState({
       title: value
    })
}
setCompany (e) {
    const value = e.target.value;
    this.setState({
       company: value
    })
}
setDuty(e) {
    const value = e.target.value;
    this.setState({
       duty: value
    })
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
                        childRef={this.titleRef}
                        value={this.state.title}
                        >
                            {/* isEditing input */}
                            <input
                                ref={this.titleRef}
                                className="rect-std"
                                placeholder='enter title' //placeholder only applicable w/o text
                                value={this.state.title} //passes value to editable as it updates
                                onChange={this.setTitle} //passes function to update value here

                            />
                        </TitleForm>

                        <TitleForm
                        childRef={this.companyRef}
                        value={this.state.company}
                        >
                            {/* isEditing input */}
                            <input
                                ref={this.companyRef}
                                className="rect-std"
                                placeholder='enter company' //placeholder only applicable w/o text
                                value={this.state.company} //passes value to editable as it updates
                                onChange={this.setCompany} //passes function to update value here

                            />
                        </TitleForm>
                        <MonthDrop />

                        {/* <input className="rect-std" placeholder="company name"></input> */}

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

                        <TitleForm
                        childRef={this.dutyRef}
                        value={this.state.duty}
                        >
                            {/* isEditing input */}
                            <input
                                ref={this.dutyRef}
                                className="rect-std"
                                placeholder='enter duty' //placeholder only applicable w/o text
                                value={this.state.duty} //passes value to editable as it updates
                                onChange={this.setDuty} //passes function to update value here

                            />
                        </TitleForm>
            {/* form ends here */}

                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;