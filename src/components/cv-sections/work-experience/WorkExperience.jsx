import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import InputStd from '../editable-forms/input-std'
import { MonthDrop, PreviewDataWork } from '../../common'
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
            dutyCount: 0,
            previewCount: 0,
            previewArray: []
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
        this.setPreviewCount = this.setPreviewCount.bind(this)
        this.setPreviewArray = this.setPreviewArray.bind(this)
        this.resetExp = this.resetExp.bind(this)
        this.expSum = []

 }

resetExp() {
    this.setState({
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
    })
}
createObject () {
    let newExp = {};
    newExp.title = this.state.title
    newExp.company = this.state.company
    newExp.monthOne = this.state.monthOne
    newExp.monthTwo = this.state.monthTwo
    newExp.yearOne = this.state.yearOne
    newExp.yearTwo = this.state.yearTwo
    newExp.duties = this.state.duties
    this.expSum.push(newExp)
    this.setPreviewCount();
    this.setPreviewArray();
    this.resetExp();
}
toggleNewItem () {
    this.setState(prevState => ({
        hideNewItem: !prevState.hideNewItem
      }));
}
setDutyCount() {
    this.setState({
        dutyCount: this.state.dutyCount + 1
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
setPreviewCount () {
    this.setState({
        previewCount: this.expSum.length
    })
}
setPreviewArray () {
    console.log('set prev ar')
    this.setState({
        previewArray: this.expSum
    })
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
                                <input
                                    ref={this.titleRef}
                                    className="rect-std"
                                    placeholder='enter title'
                                    value={this.state.title} 
                                    onChange={this.setTitle} 

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
                                    placeholder='enter company'
                                    value={this.state.company} 
                                    onChange={this.setCompany} 

                                />
                            </InputStd>

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
                            <button onClick={this.createObject}>save</button>
                        </div>
                        : null}
            {/* form ends here */}
            { this.state.previewCount > 0
                ? <PreviewDataWork data={this.state.previewArray}/>
                : <div>null render</div> }
                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;