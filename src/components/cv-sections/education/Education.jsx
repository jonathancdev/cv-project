import React, { Component, createRef } from 'react';
import './Education.css';
import InputStd from '../editable-forms/input-std'
import { MonthDrop, PreviewDataEdu, SaveSection, HoverInfo } from '../../common'

class Education extends Component {
    constructor(props) {
        super(props);

        this.locRef = createRef();
        this.degreeRef = createRef();
        this.descRef = createRef();

        this.state = {
            loc: "institution", 
            degree: "type of degree or certificate",
            desc: "description",
            monthOne: 'month',
            yearOne: 'year',
            eduArray: this.checkKeys(),
            hideNewItem: true,
            hovered: false,
            eduLimit: '',
            hideButton: true,
            saveDisplay: ''
        };

        this.createObject = this.createObject.bind(this)
        this.toggleNewItem = this.toggleNewItem.bind(this)
        this.setLoc = this.setLoc.bind(this)
        this.setDegree = this.setDegree.bind(this)
        this.setDesc = this.setDesc.bind(this)
        this.setMonthOne = this.setMonthOne.bind(this)
        this.setYearOne = this.setYearOne.bind(this)
        this.setEduArray = this.setEduArray.bind(this)
        this.checkKeys = this.checkKeys.bind(this)
        this.updateFromPreview = this.updateFromPreview.bind(this)
        this.resetExp = this.resetExp.bind(this)
        this.onHoverIn = this.onHoverIn.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)
        this.setEduLimit = this.setEduLimit.bind(this)
        this.showSaveButton = this.showSaveButton.bind(this)
        this.hideSaveButton = this.hideSaveButton.bind(this)
        this.setSuccessMessage = this.setSuccessMessage.bind(this)
        this.expSum = this.checkKeys()

 }
setEduLimit () {
    this.setState({
        eduLimit: "that's a lot of education! limit of 3 items here"
    })
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
resetExp() {
    this.setState({
        hideNewItem: true,
        loc: "institution", 
        degree: "type of degree or certificate",
        desc: "description",
        monthOne: 'month',
        yearOne: 'year'
    })
}
createObject () {
    if (this.expSum.length < 3) {
        let newExp = {};
        newExp.loc = this.state.loc
        newExp.degree = this.state.degree
        newExp.desc = this.state.desc
        newExp.monthOne = this.state.monthOne
        newExp.yearOne = this.state.yearOne
        this.expSum.push(newExp)
        this.setEduArray();
        this.resetExp();
        this.setState({
            saveDisplay: 'changes must be saved',
            hideButton: false
        })
    } else {
        this.setEduLimit()
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
setEduArray () {
    this.setState({
        eduArray: this.expSum
    })
}

checkKeys() { //new check keys
    if (Object.keys(localStorage).includes(this.props.userId + '_education')) {
        const storage = localStorage.getObject(this.props.userId + '_education')
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
setLoc (e) {
    const value = e.target.value;
    this.setState({
       loc: value
    })
}
setDegree (e) {
    const value = e.target.value;
    this.setState({
       degree: value
    })
}
setDesc (e) {
    const value = e.target.value;
    this.setState({
       desc: value
    })
}
setMonthOne(e) {
    const value = e.target.innerHTML;
    this.setState({
        monthOne: value
    })
}
setYearOne(e) {
    const value = e.target.value;
    this.setState({
        yearOne: value
    })
}
updateFromPreview(array) { //updates state when WorkItem is deleted
    this.expSum = array
    this.setState({
        eduArray: array,
        saveDisplay: 'changes must be saved',
        eduLimit: ''
    })
}

render () {
    return (
        <section className="cv-sec-wrap">
            <section className="education cv-section">
            <section className="cv-header">
                    <h1>Add your education history</h1>
                    <button onMouseEnter={this.onHoverIn} onMouseLeave={this.onHoverOut} className="help-btn">
                    {this.state.hovered
                        ? <HoverInfo
                        text="Include your educational background in this section. You can add up to 3 different
                                items in this section. Use the description box to add detail as needed."
                        >
                    </HoverInfo>
                        : null }
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                <p className="save-message">{this.state.saveDisplay}</p>
                    { !this.state.hideButton
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.state.eduArray} //object or info required before saving
                    storageName={this.props.userId + '_education'}
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
                            <p className="error-msg">{this.state.eduLimit}</p>
                        </div>
                        {!this.state.hideNewItem
                        ? <div id="form-wrapper">
                                <InputStd
                                childRef={this.locRef}
                                value={this.state.loc}
                                required={true}
                                originalValue='institution'
                                >
                                    <input
                                        ref={this.locRef}
                                        className="rect-std"
                                        placeholder='institution'
                                        value={this.state.loc} 
                                        onChange={this.setLoc}
                                        maxLength="75"

                                    />
                                </InputStd>

                                <InputStd
                                childRef={this.degreeRef}
                                value={this.state.degree}
                                required={true}
                                originalValue='type of degree or certificate'
                                >
                                    <input
                                        ref={this.degreeRef}
                                        className="rect-std"
                                        placeholder='type of degree or certificate'
                                        value={this.state.degree} 
                                        onChange={this.setDegree} 
                                        maxLength="75"

                                    />
                                </InputStd>

                                <InputStd
                                childRef={this.descRef}
                                value={this.state.desc}
                                >
                                    <input
                                        ref={this.descRef}
                                        className="rect-std"
                                        placeholder='description'
                                        value={this.state.desc} 
                                        onChange={this.setDesc}
                                        maxLength="200"
                                    />
                                </InputStd>
                                <div className="date-div">
                                <p>graduated</p>
                            <MonthDrop 
                            id="month-one"
                            value={this.state.monthOne}
                            setMonth={this.setMonthOne}
                            />
                                    <input 
                                        className="rect-date year" 
                                        placeholder="year"
                                        onChange={this.setYearOne}
                                        maxLength='4'
                                    >
                                    </input>
                                </div>
                                <div className="save-btn-div">
                                <button className="save-btn"onClick={this.createObject}>save item</button>
                            </div>                            </div>
                                : null}
                            { this.state.eduArray.length > 0
                            ? <PreviewDataEdu userId={this.props.userId} updateParent={this.updateFromPreview} data={this.state.eduArray} show={this.showSaveButton}/>
                            : null }

                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default Education;