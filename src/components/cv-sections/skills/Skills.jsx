import React, { Component, createRef } from 'react';
import './Skills.css';
import SkillItems from '../skill-items';
import {SaveSection} from '../../common'

class Skills extends Component {
    constructor() {
        super();
        this.skillRef = createRef();
        this.state = {
            skills: [
                "enter skill",
                "enter skill",
                "enter skill",
                "enter skill",
                "enter skill",
                "enter skill",
                "enter skill",
                "enter skill"
            ],
            skillCount: 0,
            skillArray: []
        };
        this.setSkill = this.setSkill.bind(this)
        this.setSkillCount = this.setSkillCount.bind(this)
        this.renderNew = this.renderNew.bind(this)
    }
setSkillArray() {
    const filtered = this.state.skills.filter(skill => skill !== "enter skill");
    this.setState({
        skillArray: filtered
    })
}
setSkillCount() {
    this.setState({
        skillCount: this.state.skillCount + 1
    })
}
renderNew () {
    if (this.state.skillCount >= 8) {
        alert('limit 8 skills per thang')
    } else {
        this.setSkillCount();
    }
}
setSkill(event, index) {
    const value = event.target.value;
    const skills = [...this.state.skills]
    skills[index] = value
    
    this.setState({
       skills: skills
    })
    this.setSkillArray()
}

render() {
    console.log(this.state.skillArray)
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
                    {this.state.skillArray.length > 0
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.state.skillArray} //object or info required before saving
                    storageName="skills"
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">
                            <section className="duties-wrap">
                                <div>
                                    <p>add skill</p>
                                    <button className="add-btn" onClick={this.renderNew}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            <SkillItems
                                value={this.state.skills}
                                setSkill={this.setSkill}
                                setSkillCount={this.setSkillCount}
                                skillCount={this.state.skillCount}
                            >
                            </SkillItems>
                            
                            </section>
                    </section>
                </section>
            </section>
        </section>
    )
}
}
export default Skills;