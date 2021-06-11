import React, { Component, createRef } from 'react';
import './Education.css';
import InputStd from '../editable-forms/input-std'
import { MonthDrop, PreviewDataEdu, SaveSection } from '../../common'

class Education extends Component {
    constructor() {
        super();

        this.locRef = createRef();
        this.degreeRef = createRef();
        this.descRef = createRef();

        this.state = {
            loc: "institution", 
            degree: "type of degree or certificate",
            desc: "description",
            monthOne: 'month',
            yearOne: 'year',
            eduArray: [],
            canSave: false,
            hideNewItem: true
        };

        this.createObject = this.createObject.bind(this)
        this.toggleNewItem = this.toggleNewItem.bind(this)
        this.setLoc = this.setLoc.bind(this)
        this.setDegree = this.setDegree.bind(this)
        this.setDesc = this.setDesc.bind(this)
        this.setMonthOne = this.setMonthOne.bind(this)
        this.setYearOne = this.setYearOne.bind(this)
        this.setEduArray = this.setEduArray.bind(this)
        this.setCanSave = this.setCanSave.bind(this)
        this.checkKeys = this.checkKeys.bind(this)
        this.resetExp = this.resetExp.bind(this)
        this.expSum = []

 }

resetExp() {
    this.setState({
        hideNewItem: true,
        loc: "institution", 
        degree: "type of degree or certificate",
        desc: "description",
        monthOne: 'month',
        yearOne: 'year',
        dutyCount: 0
    })
}
createObject () {
    let newExp = {};
    newExp.loc = this.state.loc
    newExp.degree = this.state.degree
    newExp.desc = this.state.desc
    newExp.monthOne = this.state.monthOne
    newExp.yearOne = this.state.yearOne
    this.expSum.push(newExp)
    this.setEduArray();
    this.resetExp();
}
toggleNewItem () {
    this.setState(prevState => ({
        hideNewItem: !prevState.hideNewItem
      }));
      this.setCanSave();
}
setEduArray () {
    this.setState({
        eduArray: this.expSum
    })
}
setCanSave() { //toggle save section
    this.setState(prevState => ({
        canSave: !prevState.canSave
      }));
}
checkKeys() { //checks local storage for any key/data pairs for workexp, returns them in array or []
    const keys = Object.keys(localStorage)
    const eduKeys = keys.filter(element => element.includes('eduExp'))
    if (eduKeys.length > 0) {
        console.log('hello')
        let i = 0;
        let pairs = [];
        for (i = 0; i < eduKeys.length; i++) {
            pairs.push(localStorage.getObject(eduKeys[i]))
        }
        return pairs;
    } else {
        const empty = []
        return empty;
    }
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

render () {
    return (
        <section className="cv-sec-wrap">
            <section className="education cv-section">
            <section className="cv-header">
                    <h1>Add your education history</h1>
                    <button className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                    {this.expSum.length > 0 && this.state.canSave === true
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.expSum} //object or info required before saving
                    storageName="eduExp"
                    set={this.setCanSave}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">
                        <div>
                            <p>add new item</p>
                            <button onClick={this.toggleNewItem} className="add-btn">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                        {!this.state.hideNewItem
                        ? <div id="form-wrapper">
                                <InputStd
                                childRef={this.locRef}
                                value={this.state.loc}
                                >
                                    <input
                                        ref={this.locRef}
                                        className="rect-std"
                                        placeholder='institution'
                                        value={this.state.loc} 
                                        onChange={this.setLoc} 

                                    />
                                </InputStd>

                                <InputStd
                                childRef={this.degreeRef}
                                value={this.state.degree}
                                >
                                    <input
                                        ref={this.degreeRef}
                                        className="rect-std"
                                        placeholder='type of degree or certificate'
                                        value={this.state.degree} 
                                        onChange={this.setDegree} 

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

                                    />
                                </InputStd>
                                <p>graduated</p>
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
                                <button onClick={this.createObject}>save</button>
                            </div>
                                : null}
                            { this.state.eduArray.length > 0
                            ? <PreviewDataEdu data={this.state.eduArray}/>
                            : <div>null render</div> }

                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default Education;