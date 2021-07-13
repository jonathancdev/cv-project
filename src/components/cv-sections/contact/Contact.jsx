import React, { Component, createRef } from 'react';
import './Contact.css';
import InputStd from '../editable-forms/input-std'
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto, SaveSection, checkStorage, HoverInfo } from '../../common'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.telRef = createRef();
        this.emailRef = createRef();
        this.addressRef = createRef();
        this.webRef = createRef();

        this.state = {
            tel: checkStorage(this.props.userId + '_contact') ? localStorage.getObject(this.props.userId + '_contact')[0].tel : 'telephone',
            email: checkStorage(this.props.userId + '_contact') ? localStorage.getObject(this.props.userId + '_contact')[0].email : 'email',
            address: checkStorage(this.props.userId + '_contact') ? localStorage.getObject(this.props.userId + '_contact')[0].address : 'address',
            web: checkStorage(this.props.userId + '_contact') ? localStorage.getObject(this.props.userId + '_contact')[0].web : 'website',
            hovered: false,
            hideButton: true,
            saveDisplay: ''
        }

        this.setTel = this.setTel.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setAddress = this.setAddress.bind(this)
        this.setWeb = this.setWeb.bind(this)
        this.inputsExist = this.inputsExist.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onHoverIn = this.onHoverIn.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)
        this.showSaveButton = this.showSaveButton.bind(this)
        this.hideSaveButton = this.hideSaveButton.bind(this)
        this.setSuccessMessage = this.setSuccessMessage.bind(this)

        this.contactObj = []
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
            saveDisplay: 'changes saved successfully!',
        })
    }
    setSaveMessage() {
        this.setState({
            saveDisplay: 'changes must be saved',
        })
    }
    setTel(e) {
        const value = e.target.value;
        this.setState({
            tel: value,
        })
        this.showSaveButton()
        this.setSaveMessage()
    }
    setEmail(e) {
        const value = e.target.value;
        this.setState({
            email: value,
        })
        this.showSaveButton()
        this.setSaveMessage()
    }
    setAddress(e) {
        const value = e.target.value;
        this.setState({
            address: value,
        })
        this.showSaveButton()
        this.setSaveMessage()
    }
    setWeb(e) {
        const value = e.target.value;
        this.setState({
            web: value,
        })
        this.showSaveButton()
        this.setSaveMessage()
    }
    createObject() {
        const obj = [{
            tel: this.state.tel,
            email: this.state.email,
            address: this.state.address,
            web: this.state.web
        }];
        return obj;
    }
    inputsExist () {
        if(this.state.tel !== 'telephone' || this.state.address !== 'address' || this.state.email !== 'email' || this.state.web !== 'website') {
            return true
        } else {
            return false
        }
    }
    handleDelete () {
        this.setState({
            tel: 'telephone',
            email: 'email',
            address: 'address',
            web: 'website',
        })
        this.props.updateComplete()
        this.showSaveButton()
        this.setSaveMessage()

    }

render () {
    return (
        <section className="cv-sec-wrap">
            <section className="contact cv-section">
                <section className="cv-header">
                    <h1>Add your contact information</h1>
                    <button onMouseEnter={this.onHoverIn} onMouseLeave={this.onHoverOut} className="help-btn">
                    {this.state.hovered
                        ? <HoverInfo
                        text="Enter your contact information here. Only
                                email and phone number are required."
                        >
                    </HoverInfo>
                        : null }
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                <p className="save-message">{this.state.saveDisplay}</p>
                    { !this.state.hideButton
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.createObject()} //object or info required before saving
                    storageName={this.props.userId + '_contact'}
                    updateParents={this.props.updateComplete}
                    set={this.setSuccessMessage}
                    hide={this.hideSaveButton}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="multi-form">
                        <InputStd
                        childRef={this.telRef}
                        value={this.state.tel}
                        required={true}
                        originalValue='telephone'
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
                        required={true}
                        originalValue='email'
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
                        
                            <TextAreaAuto
                                refA={this.addressRef}
                                rows='4'
                                minRows='4'
                                maxRows='20'
                                placeholder='address'
                                className="rect-long"
                                value={this.state.address}
                                setValue={this.setAddress}
                                length="200"

                            />
                        
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
                <div className="delete-storage">
                {this.inputsExist()
                    ?<button onClick={this.handleDelete}>delete</button>
                    : null}
                </div>
            </section>
        </section>
    )
}
}

export default Contact;