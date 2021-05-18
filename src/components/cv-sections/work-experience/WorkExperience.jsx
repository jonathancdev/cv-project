import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import InputStd from '../editable-forms/input-std'
import { MonthDrop } from '../../common'
import Duties from '../duties';

class WorkExperience extends Component {
    constructor() {
        super();
        this.titleRef = createRef();
        this.companyRef = createRef();
        this.dutyRef = createRef();
        this.state = {
            hideNewItem: true,
            title: "click to edit title", 
            company: "click to edit company name",
            duties: [
                "what did you do in this position?",
                "what did you do in this position?",
                "what did you do in this position?"
            ],
            monthOne: 'month',
            monthTwo: 'month',
            yearOne: 'year',
            yearTwo: 'year',
            dutyCount: 0
        };
        this.createObject = this.createObject.bind(this)
        this.toggleNewItem = this.toggleNewItem.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setCompany = this.setCompany.bind(this)
        this.setDuty = this.setDuty.bind(this)
        this.setDutyCount = this.setDutyCount.bind(this)
        this.renderNew = this.renderNew.bind(this)
        this.setMonthOne = this.setMonthOne.bind(this)
        this.setMonthTwo = this.setMonthTwo.bind(this)
        this.setYearOne = this.setYearOne.bind(this)
        this.setYearTwo = this.setYearTwo.bind(this)
        this.exp = {
            title: this.state.title,
            company: this.state.company,
            monthOne: this.state.monthOne,
            monthTwo: this.state.monthTwo,
            yearOne: this.state.yearOne,
            yearTwo: this.state.yearTwo,
            dutyCount: this.state.dutyCount,
            duties: this.state.duties
        }
        this.expSum = []

 }
createObject () {
    const newExp = this.exp;
    newExp.title = this.state.title
    newExp.company = this.state.company
    newExp.monthOne = this.state.monthOne
    newExp.monthTwo = this.state.monthTwo
    newExp.yearOne = this.state.yearOne
    newExp.yearTwo = this.state.yearTwo
    newExp.duties = this.state.duties
    this.expSum.push(newExp)
    // function to clear and hide form, show preview of saved jobs
    console.log(this.expSum)
}
toggleNewItem () {
    this.setState(prevState => ({
        hideNewItem: !prevState.hideNewItem
      }));
      console.log(this.state.hideNewItem)
}
setDutyCount() {
    this.setState({
        dutyCount: this.state.dutyCount += 1
    })
}
renderNew () {
    if (this.state.dutyCount >= 3) {
        alert('limit 3 duties per thing')
    } else {
        this.setDutyCount();
    }
    console.log(this.state.dutyCount)
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
setDuty(event, index) {
    console.log(event)
    const value = event.target.value;
    const duties = [...this.state.duties]
    duties[index] = value
    
    this.setState({
       duties: duties
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
                <button onClick={this.createObject}>save</button>
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
                            <button onClick={this.toggleNewItem} className="add-btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
            {/* form starts here */}
                        {!this.state.hideNewItem
                        ? <div id="form-wrapper">
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

                            <section className="duties-wrap">
                                <div>
                                    <p>add job duty</p>
                                    <button className="add-btn" onClick={this.renderNew}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            <Duties
                                value={this.state.duties}
                                setDuty={this.setDuty}
                                setDutyCount={this.setDutyCount}
                                dutyCount={this.state.dutyCount}
                            >
                            </Duties>
                            </section>
                        </div>
                        : null}
            {/* form ends here */}

                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;