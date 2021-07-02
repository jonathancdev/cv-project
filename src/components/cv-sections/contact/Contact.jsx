import React, { Component, createRef } from 'react';
import './Contact.css';
import InputStd from '../editable-forms/input-std'
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto, SaveSection, checkStorage, removeStorage, HoverInfo } from '../../common'

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
            canSave: false,
            saveAfterDelete: false,
            hovered: false
        }

        this.setTel = this.setTel.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setAddress = this.setAddress.bind(this)
        this.setWeb = this.setWeb.bind(this)
        this.setCanSave = this.setCanSave.bind(this)
        this.setDeleteSave = this.setDeleteSave.bind(this)
        this.inputsExist = this.inputsExist.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onHoverIn = this.onHoverIn.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)

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
    setCanSave() { //toggle save section
        this.setState(prevState => ({
            canSave: !prevState.canSave
          }));
    }
    setDeleteSave() {
        this.setState({saveAfterDelete: true})
        this.setState(prevState => ({
            canSave: !prevState.canSave,
          }));
    }
    setTel(e) {
        const value = e.target.value;
        this.setState({
            tel: value,
            canSave: true
        })
    }
    setEmail(e) {
        const value = e.target.value;
        this.setState({
            email: value,
            canSave: true
        })
    }
    setAddress(e) {
        const value = e.target.value;
        this.setState({
            address: value,
            canSave: true
        })
    }
    setWeb(e) {
        const value = e.target.value;
        this.setState({
            web: value,
            canSave: true
        })
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
        this.setDeleteSave()
        this.props.updateComplete()

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
                        text="Enter your contact information here for potential employers to reach out. Only
                                email and phone number are required in this section."
                        >
                    </HoverInfo>
                        : null }
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section key={this.state.setCanSave} className="save-section-wrap">
                    {this.state.canSave || this.state.saveAfterDelete
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.createObject()} //object or info required before saving
                    storageName={this.props.userId + '_contact'}
                    set={this.setCanSave}
                    updateParents={this.props.updateComplete}
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