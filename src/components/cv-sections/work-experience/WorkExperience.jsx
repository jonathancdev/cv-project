import React, { Component, createRef } from 'react';
import './WorkExperience.css';
import InputStd from '../editable-forms/input-std'
import { MonthDrop, PreviewDataWork, SaveSection, HoverInfo} from '../../common'
import Duties from '../duties';

class WorkExperience extends Component {
    constructor(props) {
        super(props);
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
            hideNewItem: true,
            hovered: false,
            expLimit: '',
            dutyLimit: '',
            hideButton: true,
            saveDisplay: ''
        };
        //bind functions
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
        this.resetExp = this.resetExp.bind(this)
        this.checkKeys = this.checkKeys.bind(this)
        this.updateFromPreview = this.updateFromPreview.bind(this)
        this.updateDutiesChild = this.updateDutiesChild.bind(this)
        this.onHoverIn = this.onHoverIn.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)
        this.setWorkLimit = this.setWorkLimit.bind(this)
        this.setDutyLimit = this.setDutyLimit.bind(this)
        this.showSaveButton = this.showSaveButton.bind(this)
        this.hideSaveButton = this.hideSaveButton.bind(this)
        this.setSuccessMessage = this.setSuccessMessage.bind(this)
        this.mobileHover = this.mobileHover.bind(this)
        //set expSum
        this.expSum = this.checkKeys();
 }

setWorkLimit () {
    this.setState({
        workLimit: 'use only your most relevant experience! limit of 3 previous jobs'
    })
}
setDutyLimit () {
    this.setState({
        dutyLimit: 'keep it short and sweet! limit of 3 job duties'
    })
}
mobileHover() {
    this.setState(prevState => ({
        hovered: !prevState.hovered
      }));
}
onHoverIn() {
    this.setState({
        hovered: true
    })
}
onHoverOut() {
    this.setState({
        hovered: false
    })
}

componentWillUnmount () {
    this.props.updateComplete()
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
    if (this.expSum.length < 3) {
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
            saveDisplay: 'changes must be saved',
            hideButton: false
        })
    } else {
        this.setWorkLimit()
        this.resetExp()
    }
}

toggleNewItem () { //toggles form to allow new experience input
    this.setState(prevState => ({
        hideNewItem: !prevState.hideNewItem
      }));
    if (this.state.saveDisplay === 'changes must be saved') {
        this.setState({
            saveDisplay: 'changes must be saved',
            hideButton: false
        })
    } else {
        this.setState({
            saveDisplay: '',
            hideButton: true,
            workLimit: ''
        })
}
}

setDutyCount() { //counts # duties within exp object (limit 3)
    this.setState({
        dutyCount: this.state.dutyCount + 1
    })
}
updateDutiesChild(newCount) { //updates duty count from child
    this.setState({
        dutyCount: newCount
    })
}
newDuty () { //when button clicked to add new duty, checks if over limit
    if (this.state.dutyCount >= 3) {
        this.setDutyLimit();
    } else {
        this.setDutyCount();
    }
}

setExpArray () { //when new work exp obj saved, sets state array to include all in expSum array
    this.setState({
        expArray: this.expSum
    })
}

checkKeys() { //checks storage for values before using intiial
    if (Object.keys(localStorage).includes(this.props.userId + '_work')) {
        const storage = localStorage.getObject(this.props.userId + '_work')
        return storage;
    } else {
        const empty = []
        return empty;
    }
}
showSaveButton() {
    this.setState({
        hideButton: false
    })
}
hideSaveButton() {
    this.setState({
        hideButton: true
    })
}
setSuccessMessage() {
    this.setState({
        saveDisplay: 'changes saved successfully!',
    })
}

updateFromPreview(array) { //updates state when WorkItem is deleted
    this.expSum = array
    this.setState({
        expArray: array,
        saveDisplay: 'changes must be saved',
        workLimit: ''
    })
}

//functions to save inputs as they are being entered in form
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
    return (
        <section className="cv-sec-wrap">
            <section className="work-experience cv-section">
                <section className="cv-header">
                        <h1>Add your work experience</h1>
                        <button onTouchStart={this.mobileHover} onMouseEnter={this.onHoverIn} onMouseLeave={this.onHoverOut} className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                {this.state.hovered
                        ? <HoverInfo
                            text="Include your work experience in this section. You can add up to
                                3 items here. There is a limit to 3 duties for each item, so only
                                enter the most important details."
                            >
                        </HoverInfo>
                        : null }
                <section className="save-section-wrap">
                <p className="save-message">{this.state.saveDisplay}</p>
                    {!this.state.hideButton
                    ?<SaveSection
                    display={this.state.saveDisplay}
                    required={this.state.expArray}
                    storageName={this.props.userId + '_work'}
                    set={this.setSuccessMessage}
                    updateParents={this.props.updateComplete}
                    hideButton={this.state.hideButton}
                    hide={this.hideSaveButton}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">

                        <div>
                            <h5>add new item</h5>
                            <button onClick={this.toggleNewItem} className="add-btn">
                                {this.state.hideNewItem
                                ? <i className="fas fa-plus"></i>
                                : <i className="fas fa-window-minimize"></i> }
                            </button>
                            <p className="error-msg">{this.state.workLimit}</p>
                        </div>
            {/* form starts here */}
                        {!this.state.hideNewItem
                        ? <div id="form-wrapper">
                            <InputStd
                            childRef={this.titleRef}
                            value={this.state.title}
                            required={true}
                            originalValue='click to edit title'
                            >
                                <input
                                    ref={this.titleRef}
                                    className="rect-std"
                                    placeholder='enter title'
                                    value={this.state.title} 
                                    onChange={this.setTitle} 
                                    maxLength="75"

                                />
                            </InputStd>

                            <InputStd
                            childRef={this.companyRef}
                            value={this.state.company}
                            required={true}
                            originalValue='click to edit company name'
                            >
                                {/* isEditing input */}
                                <input
                                    ref={this.companyRef}
                                    className="rect-std"
                                    placeholder='enter company'
                                    value={this.state.company} 
                                    onChange={this.setCompany}
                                    maxLength="50"

                                />
                            </InputStd>

                            <div className="date-div">
                                <div className="monthyear">
                                    <p>from</p>
                                    <MonthDrop 
                                    id="month-one"
                                    value={this.state.monthOne}
                                    setMonth={this.setMonthOne}
                                    />
                                    <div>
                                        <input 
                                            className="rect-date year" 
                                            placeholder="year"
                                            onChange={this.setYearOne}
                                            maxLength='4'
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div className="monthyear">
                                    <p>to</p>
                                    <MonthDrop 
                                    id="month-two"
                                    value={this.state.monthTwo}
                                    setMonth={this.setMonthTwo}
                                    />
                                    <div>
                                        <input 
                                        className="rect-date year" 
                                        placeholder="year"
                                        onChange={this.setYearTwo}
                                        maxLength='4'
                                        >
                                        </input>
                                    </div>
                                </div>

                            </div>

                            <div className="duties-wrap">
                                <div>
                                    <h6>add job duty</h6>
                                    <button className="add-btn" onClick={this.newDuty}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    <p className="error-msg">{this.state.dutyLimit}</p>
                                </div>

                            <Duties
                                value={this.state.duties}
                                setDuty={this.setDuty}
                                setDutyCount={this.setDutyCount}
                                dutyCount={this.state.dutyCount}
                                update={this.updateDutiesChild}
                            >
                            </Duties>
                            
                            </div>
                            <div className="save-btn-div">
                                <button className="save-btn" onClick={this.createObject}>save item</button>
                            </div>
                        </div>
                        : null}
            {/* form ends here */}
            { this.state.expArray.length > 0
                ? <PreviewDataWork userId={this.props.userId} updateParent={this.updateFromPreview} data={this.state.expArray} show={this.showSaveButton}/>
                : null }
                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default WorkExperience;