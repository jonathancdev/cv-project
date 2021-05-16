import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import InputStd from '../editable-forms/input-std'
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
            duty: "what did you do in this position?",
            monthOne: 'month',
            monthTwo: 'month',
            yearOne: 'year',
            yearTwo: 'year'
        };
        this.setTitle = this.setTitle.bind(this)
        this.setCompany = this.setCompany.bind(this)
        this.setDuty = this.setDuty.bind(this)
        this.setMonthOne = this.setMonthOne.bind(this)
        this.setMonthTwo = this.setMonthTwo.bind(this)
        this.setYearOne = this.setYearOne.bind(this)
        this.setYearTwo = this.setYearTwo.bind(this)

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
setMonthOne(e) {
    const value = e.target.innerHTML;
    this.setState({
        monthOne: value
    })
}
setMonthTwo(e) {
    const value = e.target.innerHTML;
    this.setState({
        monthTwo: value
    })
}
setYearOne(e) {
    const value = e.target.value;
    this.setState({
        yearOne: value
    })
}
setYearTwo(e) {
    const value = e.target.value;
    this.setState({
        yearTwo: value
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

                        <InputStd
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
                        </InputStd>

                        <InputStd
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
                        </InputStd>


                        {/* <input className="rect-std" placeholder="company name"></input> */}

                        <div>
                            <p>from</p>
                            <MonthDrop 
                        id="month-one"
                        value={this.state.monthOne}
                        setMonth={this.setMonthOne}
                        />
                            <div>
                                <input 
                                    type="year" 
                                    className="rect-date year" 
                                    placeholder="year"
                                    onChange={this.setYearOne}
                                    maxLength='4'
                                >
                                </input>
                            </div>
                            <p>to</p>
                            <MonthDrop 
                        id="month-two"
                        value={this.state.monthTwo}
                        setMonth={this.setMonthTwo}
                        />
                            <div>
                                <input 
                                type="year" 
                                className="rect-date year" 
                                placeholder="year"
                                onChange={this.setYearTwo}
                                maxLength='4'
                                >
                                </input>
                            </div>
                        </div>

                        <div>
                            <p>add job duty</p>
                            <button className="add-btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>

                        <InputStd
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
                        </InputStd>
            {/* form ends here */}

                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;