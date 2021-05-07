import React, { useState, useRef } from 'react';
import './Profile.css';
import ProfileForm from '../editable-forms/profile'

function Profile () {

    const [userText, setUserText] = useState("click to edit personal profile");
    const inputRef = useRef();

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
          text={userText}
          placeholder="click to edit personal profile"
          childRef={inputRef}
          type="textarea"
          // type="input"
        >

          {/* <textarea
            ref={inputRef}
            name="description"
            placeholder={description}
            rows="5"
            value={description}
            onChange={e => setDescription(e.target.value)}
            /> */}

          {<textarea
            className="rect-long editable"
            type="text"
            placeholder="click to edit personal profile"
            value={userText}
            onChange={e => setUserText(e.target.value)}
            />}


          
        </ProfileForm>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Profile;