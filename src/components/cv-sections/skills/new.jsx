import React, { Component, createRef } from 'react';
import './Skills.css';
import SkillItems from '../skill-items';

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
            skillCount: 0
        };
        this.setSkill = this.setSkill.bind(this)
        this.setSkillCount = this.setSkillCount.bind(this)
        this.renderNew = this.renderNew.bind(this)
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
       duties: duties
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
                <section className="sec-form-wrap">
                    <section className="multi-form">
                            <section className="duties-wrap">
                                <div>
                                    <p>add skill</p>
                                    <button className="add-btn" onClick={}>
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>

                            <SkillItems
                                value={this.state.duties}
                                setDuty={this.setDuty}
                                setDutyCount={this.setDutyCount}
                                dutyCount={this.state.dutyCount}
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