import React, { Component, createRef } from 'react';
import './Skills.css';
import InputStd from '../editable-forms/input-std'
import {SaveSection, PreviewDataSkills2} from '../../common'

class Skills extends Component {
    constructor(props) {
        super(props);

        this.skillRef = createRef();
        this.state = {
            skill: 'enter skill',
            skillCount: 0,
            skillArray: this.checkKeys(),
            canSave: false,
            saveAfterDelete: false,
            hideNewSkill: true
        };

        this.setSkill = this.setSkill.bind(this)
        this.setSkillCount = this.setSkillCount.bind(this)
        this.newSkill = this.newSkill.bind(this)
        this.setCanSave = this.setCanSave.bind(this)
        this.setDeleteSave = this.setDeleteSave.bind(this)
        this.checkKeys = this.checkKeys.bind(this)
        this.updateFromPreview = this.updateFromPreview.bind(this)
        this.saveSkill = this.saveSkill.bind(this)
        this.toggleNewItem = this.toggleNewItem.bind(this)
        this.skillSum = this.checkKeys()
    }

componentWillUnmount () {
    this.props.updateComplete()
}
toggleNewItem () { //toggles form to allow new experience input
    this.setState(prevState => ({
        hideNewSkill: !prevState.hideNewSkill
        }));
}
setSkillCount() {
    this.setState({
        skillCount: this.state.skillCount + 1
    })
}
newSkill () {
    if (this.state.skillCount >= 8) {
        alert('limit 8 skills per thang')
    } else {
        this.setSkillCount();
    }
    this.setState({
        canSave: true
    })
}
setCanSave() {
    this.setState(prevState => ({
        canSave: !prevState.canSave,
      }));
      this.setState({saveAfterDelete: false})
}
setDeleteSave() {
    this.setState({saveAfterDelete: true})
    this.setState(prevState => ({
        canSave: !prevState.canSave,
      }));
      this.setState({expArray: this.checkKeys()})
}
saveSkill() {
    let newSkill = this.state.skill
    this.skillSum.push(newSkill)
    this.setState({
        skill: 'enter skill',
        skillArray: this.skillSum,
        canSave: true,
        hideNewSkill: true
    })
}
checkKeys() { //new check keys
    if (Object.keys(localStorage).includes(this.props.userId + "_skills")) {
        const storage = localStorage.getObject(this.props.userId + "_skills")
        return storage;
    } else {
        const empty = []
        return empty;
    }
}
// checkKeys() { //checks local storage for any key/data pairs for workexp, returns them in array or []
//     const skillKeys = Object.keys(localStorage).filter(item => item.includes('skill')).sort()
//     if (skillKeys.length > 0) {
//         let i = 0;
//         let pairs = [];
//         for (i = 0; i < skillKeys.length; i++) {
//             pairs.push(localStorage.getObject(skillKeys[i]))
//         }
//         pairs.sort()
//         return pairs;
//     } else {
//         const empty = []
//         return empty;
//     }
// }
updateFromPreview(array) {
    this.setState({
        skillArray: array,
    })
}
setSkill(event, index) { //probably don't need array here
    const value = event.target.value;
    
    this.setState({
       skill: value
    })
}
render() {
    return (
        <section className="cv-sec-wrap">
            <section className="skills cv-section">
                <section className="cv-header">
                    <h1>Add your skills</h1>
                    <button className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                    {(this.state.skillArray.length > 0 && this.state.canSave === true) || this.state.saveAfterDelete === true
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.state.skillArray} //what goes here?
                    storageName={this.props.userId + "_skills"}
                    set={this.setCanSave}
                    updateParents={this.props.updateComplete}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">

                                <div>
                                    <p>add skill</p>
                                    <button onClick={this.toggleNewItem} className="add-btn">
                                {this.state.hideNewSkill
                                ? <i className="fas fa-plus"></i>
                                : <i className="fas fa-window-minimize"></i> }
                                </button>
                                </div>

                                {!this.state.hideNewSkill
                                ? <div className="form-wrapper">
                                    <InputStd
                                childRef={this.skillRef}
                                value={this.state.skill}
                                >
                                    <input
                                        ref={this.skillRef}
                                        className="rect-std"
                                        placeholder='enter skill'
                                        value={this.state.skill}
                                        onChange={(e) => {
                                            this.setSkill(e);
                                        }}
                                        maxLength="50"
                                    />
                                </InputStd>
                                <div className="save-btn-div">
                                    <button className="save-btn"onClick={this.saveSkill}>save skill</button>
                                </div>                                
                            </div>
                                : null}

                { this.state.skillArray.length > 0
                ? <PreviewDataSkills2 userId={this.props.userId} save={this.setDeleteSave} updateParent={this.updateFromPreview} data={this.state.skillArray}/>
                : null}
                    </section>
                </section>
            </section>
        </section>
    )
}
}
export default Skills;