import React, { Component, createRef } from 'react';
import './Profile.css';
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto } from '../../common'

class Profile extends Component {
    constructor() {
        super();
        this.inputRef = createRef();

        this.state = {
            value: "click to edit profile", // value to display/save, passed to ProfileForm and TextAreaAuto child
        };
        this.setValue = this.setValue.bind(this) //binds SetValue to the state in Profile Class
    }

setValue (e) {
      const value = e.target.value; //takes value of listener target, in this case TextAreaAuto onChange listener
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
                        value={this.state.value} //pass state down for display
                        childRef={this.inputRef} //normal prop passing reference to this component
                        type="textarea"
                        >
                        {
                            <TextAreaAuto
                                refA={this.inputRef} //reference to the editable textarea itself
                                rows='1'
                                minRows='1'
                                maxRows='20'
                                placeholder='enter personal profile' //placeholder only applicable w/o text
                                className="rect-long"
                                value={this.state.value} //passes value to editable as it updates
                                setValue={this.setValue} //passes function to update value here
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