import React, { Component, createRef } from 'react';
import './Profile.css';
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto, SaveSection, checkStorage, removeStorage } from '../../common'

class Profile extends Component {
    constructor() {
        super();
        this.inputRef = createRef();

        this.state = {
            value: checkStorage('profile') ? localStorage.getItem('profile') : 'click to edit profile',
            canSave: false
        };
        this.setValue = this.setValue.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

setValue (e) {
      const value = e.target.value;
      this.setState({
         value: value,
         canSave: this.state.value !== 'click to edit profile' && this.state.value !== localStorage.getItem('profile')
      })
 }
setCanSave() {
    this.setState({
        canSave: this.state.value !== 'click to edit profile' && this.state.value !== localStorage.getItem('profile')
    })
}
handleDelete() {
    removeStorage('profile')
    this.setState({value: 'click to edit profile'})
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
                    {this.state.canSave
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
                                rows='3.5'
                                minRows='3.5'
                                maxRows='30'
                                placeholder='enter personal profile'
                                className="rect-long"
                                value={this.state.value}
                                setValue={this.setValue}
                            />
                        }

                    </ProfileForm>
                    </section>
                </section>
                <div className="delete-storage">
                {this.state.value !== 'click to edit profile'
                    ?<button onClick={this.handleDelete}>delete</button>
                    : null}
                </div>
            </section>
        </section>
    )
}
}

export default Profile;