import React, { Component, createRef } from 'react';
import './Profile.css';
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto } from '../../common'

class Profile extends Component {
    constructor() {
        super();
        this.inputRef = createRef();
        this.state = {
            value: "click to edit profile",
            rows: 5,
			minRows: 5,
			maxRows: 5
        };
        this.setValue = this.setValue.bind(this)
    }

setValue (e) {
      const value = e.target.value;
      this.setState({
         value: value
      })
 }
render() {
    return (
        <section className="cv-sec-wrap">
            <section className="profile cv-section">
                <section className="cv-header">
                    <h1>Add your personal profile</h1>
                    <button className="help-btn">
                        <i class="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="sec-form-wrap">
                    <section className="mult-form">
                    <p>Enter your profile here</p>
                    <ProfileForm
                        value={this.state.value}
                        childRef={this.inputRef}
                        type="textarea"
                        >
                        {
                            <TextAreaAuto
                                refA={this.inputRef}
                                rows='1'
                                minRows='1'
                                maxRows='20'
                                placeholder='enter personal profile'
                                className="rect-long"
                                id='ta-auto-profile'
                                value={this.state.value}
                                setValue={this.setValue}
                            />
                        }

                    </ProfileForm>
                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default Profile;