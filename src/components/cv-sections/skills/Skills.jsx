import React, { Component, createRef } from 'react';
import './Skills.css';
import InputStd from '../editable-forms/input-std'
import {SaveSection, PreviewDataSkills2, HoverInfo} from '../../common'

class Skills extends Component {
    constructor(props) {
        super(props);

        this.skillRef = createRef();
        this.state = {
            skill: 'enter skill',
            skillArray: this.checkKeys(),
            hideNewSkill: true,
            hovered: false,
            skillLimit: '',
            hideButton: true,
            saveDisplay: '',
        };

        this.setSkill = this.setSkill.bind(this)
        this.checkKeys = this.checkKeys.bind(this)
        this.updateFromPreview = this.updateFromPreview.bind(this)
        this.saveSkill = this.saveSkill.bind(this)
        this.toggleNewItem = this.toggleNewItem.bind(this)
        this.onHoverIn = this.onHoverIn.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)
        this.setSkillLimit = this.setSkillLimit.bind(this)
        this.skillSum = this.checkKeys()
        this.showSaveButton = this.showSaveButton.bind(this)
        this.hideSaveButton = this.hideSaveButton.bind(this)
        this.setSuccessMessage = this.setSuccessMessage.bind(this)
        this.mobileHover = this.mobileHover.bind(this)
    }
setSkillLimit () {
    this.setState({
        skillLimit: "very talented! limit of 8 skills here"
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
toggleNewItem () { //toggles form to allow new experience input
    this.setState(prevState => ({
        hideNewSkill: !prevState.hideNewSkill,
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
            skillLimit: ''
        })
    }
}
saveSkill() {
    if (this.state.skillArray.length < 8) {
        let newSkill = this.state.skill
        this.skillSum.push(newSkill)
        this.showSaveButton()
        this.setState({
            skill: 'enter skill',
            skillArray: this.skillSum,
            hideNewSkill: true,
            saveDisplay: 'changes must be saved'
        })
    } else {
        this.setSkillLimit()
        this.setState({
            skill: 'enter skill',
            hideNewSkill: true
        })
    }
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
        saveDisplay: 'changes saved successfully!'
    })
}
updateFromPreview(array) {
    this.skillSum = array
    this.setState({
        skillArray: array,
        saveDisplay: 'changes must be saved'
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
                    <button onTouchStart={this.mobileHover} onMouseEnter={this.onHoverIn} onMouseLeave={this.onHoverOut} className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                {this.state.hovered
                        ? <HoverInfo
                        text="Include your skills and qualifications relevant to the positions you are seeking in this section. 
                            There is a limit to 8 items here, but you can group similar skills together."
                        >
                    </HoverInfo>
                        : null }
                <section className="save-section-wrap">
                    <p className="save-message">{this.state.saveDisplay}</p>
                    { !this.state.hideButton
                    ?<SaveSection
                    display={this.state.saveDisplay}
                    required={this.state.skillArray}
                    storageName={this.props.userId + "_skills"}
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
                                    <h5>add skill</h5>
                                    <button onClick={this.toggleNewItem} className="add-btn">
                                {this.state.hideNewSkill
                                ? <i className="fas fa-plus"></i>
                                : <i className="fas fa-window-minimize"></i> }
                                </button>
                                <p className="error-msg">{this.state.skillArray.length > 7 ? this.state.skillLimit : ''}</p>
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
                ? <PreviewDataSkills2 userId={this.props.userId} updateParent={this.updateFromPreview} data={this.state.skillArray} show={this.showSaveButton} />
                : null}
                    </section>
                </section>
            </section>
        </section>
    )
}
}
export default Skills;