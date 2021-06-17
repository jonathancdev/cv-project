import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import InputStd from '../editable-forms/input-std'
import { MonthDrop, PreviewDataWork, SaveSection } from '../../common'
import Duties from '../duties';

class WorkExperience extends Component {
    constructor() {
        super();
        //refs
        this.titleRef = createRef();
        this.companyRef = createRef();
        this.dutyRef = createRef();
        //state
        this.state = {
            //input defaults
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
            //work experience array
            expArray: this.checkKeys(),
            //counters
            dutyCount: 0,
            //booleans
            canSave: false,
            hideNewItem: true
        };
        //bind methods
        this.createObject = this.createObject.bind(this)
        this.toggleNewItem = this.toggleNewItem.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setCompany = this.setCompany.bind(this)
        this.setDuty = this.setDuty.bind(this)
        this.setDutyCount = this.setDutyCount.bind(this)
        this.newDuty = this.newDuty.bind(this)
        this.setMonthOne = this.setMonthOne.bind(this)
        this.setMonthTwo = this.setMonthTwo.bind(this)
        this.setYearOne = this.setYearOne.bind(this)
        this.setYearTwo = this.setYearTwo.bind(this)
        this.setExpArray = this.setExpArray.bind(this)
        this.setCanSave = this.setCanSave.bind(this)
        this.resetExp = this.resetExp.bind(this)
        this.checkKeys = this.checkKeys.bind(this)
        this.updateFromPreview = this.updateFromPreview.bind(this)
        this.updateDutiesChild = this.updateDutiesChild.bind(this)
        //set expSum
        this.expSum = this.checkKeys();

 }

resetExp() { //when new work exp item added, resets values to set up new object
    this.setState({
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
        hideNewItem: true
    })
}
createObject () { //save button creates new object with current form inputs, pushes to expSum
    let newExp = {};
    newExp.title = this.state.title
    newExp.company = this.state.company
    newExp.monthOne = this.state.monthOne
    newExp.monthTwo = this.state.monthTwo
    newExp.yearOne = this.state.yearOne
    newExp.yearTwo = this.state.yearTwo
    newExp.duties = this.state.duties
    this.expSum.push(newExp)
    this.setExpArray();
    this.resetExp();
    this.setState({
        canSave: true
    })
}
toggleNewItem () { //toggles form to allow new experience input
    this.setState(prevState => ({
        hideNewItem: !prevState.hideNewItem
      }));
}
setDutyCount() { //counts # duties within exp object (limit 3)
    this.setState({
        dutyCount: this.state.dutyCount + 1
    })
}
updateDutiesChild(newCount) {
    this.setState({
        //duties: array,
        dutyCount: newCount
    })
}
newDuty () { //when button clicked to add new duty, checks if over limit
    if (this.state.dutyCount >= 3) {
        alert('limit 3 duties per thing')
    } else {
        this.setDutyCount();
    }
}
setExpArray () { //when new work exp obj saved, sets state array to include all in expSum array
    console.log('setExpArray being called')
    this.setState({
        expArray: this.expSum
    })
}
setCanSave() { //toggle save section
    this.setState(prevState => ({
        canSave: !prevState.canSave
      }));
}
checkKeys() { //checks local storage for any key/data pairs for workexp, returns them in array or []
    const keys = Object.keys(localStorage)
    const workKeys = keys.filter(element => element.includes('workExp'))
    if (workKeys.length > 0) {
        console.log('hello')
        let i = 0;
        let pairs = [];
        for (i = 0; i < workKeys.length; i++) {
            pairs.push(localStorage.getObject(workKeys[i]))
        }
        return pairs;
    } else {
        const empty = []
        return empty;
    }
}
updateFromPreview() {
    this.expSum = this.checkKeys()
    this.setState({expArray: this.expSum})
}
//methods to save inputs as they are being entered in form
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
    console.log(this.state.canSave)
    return (
        <section className="cv-sec-wrap">
            <section className="work-experience cv-section">
                <section className="cv-header">
                        <h1>Add your work experience</h1>
                        <button className="help-btn">
                            <i className="far fa-question-circle"></i>
                        </button>
                </section>
                <section className="save-section-wrap">
                    {this.expSum.length > 0 && this.state.canSave === true
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.state.expArray} //object or info required before saving
                    storageName="workExp"
                    set={this.setCanSave}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">

                        <div>
                            <p>add new item</p>
                            <button onClick={this.toggleNewItem} className="add-btn">
                                {this.state.hideNewItem
                                ? <i className="fas fa-plus"></i>
                                : <i className="fas fa-window-minimize"></i> }
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
                                    <button className="add-btn" onClick={this.newDuty}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            <Duties
                                value={this.state.duties}
                                setDuty={this.setDuty}
                                setDutyCount={this.setDutyCount}
                                dutyCount={this.state.dutyCount}
                                update={this.updateDutiesChild}
                            >
                            </Duties>
                            
                            </section>
                            <button onClick={this.createObject}>save</button>
                        </div>
                        : null}
            {/* form ends here */}
            { this.state.expArray.length > 0
                ? <PreviewDataWork updateParent={this.updateFromPreview} data={this.state.expArray}/>
                : null }
                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;