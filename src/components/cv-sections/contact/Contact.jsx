import React, { Component, createRef } from 'react';
import './Contact.css';
import InputStd from '../editable-forms/input-std'
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto, SaveSection } from '../../common'

class Contact extends Component {
    constructor() {
        super();
        this.telRef = createRef();
        this.emailRef = createRef();
        this.addressRef = createRef();
        this.webRef = createRef();
        this.state = {
            tel: 'telephone',
            email: 'email',
            address: 'address',
            web: 'website'
        }
        this.setTel = this.setTel.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setAddress = this.setAddress.bind(this)
        this.setWeb = this.setWeb.bind(this)
        this.createArray = this.createArray.bind(this)
        this.contactSum = [];
    }
    setTel(e) {
        const value = e.target.value;
        this.setState({
            tel: value
        })
    }
    setEmail(e) {
        const value = e.target.value;
        this.setState({
            email: value
        })
    }
    setAddress(e) {
        const value = e.target.value;
        this.setState({
            address: value
        })
    }
    setWeb(e) {
        const value = e.target.value;
        this.setState({
            web: value
        })
    }
    createArray() {
        const obj = this.state;
        const array = [obj.tel, obj.email, obj.address, obj.web]
        return array;
    }

render () {
    return (
        <section className="cv-sec-wrap">
            <section className="contact cv-section">
                <section className="cv-header">
                    <h1>Add your contact information</h1>
                    <button className="help-btn">
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                    {this.state.tel !== 'telephone'
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.createArray()} //object or info required before saving
                    storageName="contact"
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">
                        <InputStd
                        childRef={this.telRef}
                        value={this.state.tel}
                        >
                            <input
                                ref={this.telRef}
                                className="rect-std"
                                placeholder='telephone'
                                value={this.state.tel} 
                                onChange={this.setTel} 

                            />
                        </InputStd>

                        <InputStd
                        childRef={this.emailRef}
                        value={this.state.email}
                        >
                            <input
                                ref={this.emailRef}
                                className="rect-std"
                                placeholder='email'
                                value={this.state.email} 
                                onChange={this.setEmail} 

                            />
                        </InputStd>  

                        <ProfileForm
                        value={this.state.address}
                        childRef={this.addressRef}
                        type="textarea"
                        >
                        {
                            <TextAreaAuto
                                refA={this.addressRef}
                                rows='4'
                                minRows='4'
                                maxRows='20'
                                placeholder='address'
                                className="rect-long"
                                value={this.state.address}
                                setValue={this.setAddress}
                            />
                        }
                        </ProfileForm>
                        
                        <InputStd
                        childRef={this.webRef}
                        value={this.state.web}
                        >
                            <input
                                ref={this.webRef}
                                className="rect-std"
                                placeholder='telephone'
                                value={this.state.web} 
                                onChange={this.setWeb} 

                            />
                        </InputStd>  
                    </section>
                </section>
            </section>
        </section>
    )
}
}

export default Contact;