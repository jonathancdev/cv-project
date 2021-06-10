import React, { Component, createRef } from 'react';
import './Profile.css';
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto, SaveSection, checkStorage } from '../../common'

class Profile extends Component {
    constructor() {
        super();
        this.inputRef = createRef();

        this.state = {
            value: checkStorage('profile') ? localStorage.getItem('profile') : 'click to edit profile',
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
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                    {this.state.value !== 'click to edit profile' && this.state.value !== localStorage.getItem('profile')
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.state.value} //object or info required before saving
                    storageName="profile"
                    />
                    : null}
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