import React, { Component, createRef } from 'react';
import './Profile.css';
import ProfileForm from '../editable-forms/profile'
import { TextAreaAuto, SaveSection, checkStorage, removeStorage, HoverInfo } from '../../common'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef();

        this.state = {
            value: checkStorage(this.props.userId + '_profile') ? localStorage.getItem(this.props.userId + '_profile') : 'click to edit profile',
            canSave: false,
            hovered: false
        };
        this.setValue = this.setValue.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onHoverIn = this.onHoverIn.bind(this)
        this.onHoverOut = this.onHoverOut.bind(this)

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

setValue (e) {
      const value = e.target.value;
      this.setState({
         value: value,
         canSave: this.state.value !== 'click to edit profile' && this.state.value !== localStorage.getItem(this.props.userId + '_profile')
      })
 }
setCanSave() {
    this.setState({
        canSave: this.state.value !== 'click to edit profile' && this.state.value !== localStorage.getItem(this.props.userId + '_profile')
    })
}
handleDelete() {
    removeStorage(this.props.userId + "_profile")
    this.setState({value: 'click to edit profile'})
    this.props.updateComplete()

}
render() {
    console.log(this.state.canSave)
    console.log(this.state.value)
    return (
        <section className="cv-sec-wrap">
            <section className="profile cv-section">
                <section className="cv-header">
                    <h1>Add your personal profile</h1>
                    <button onMouseEnter={this.onHoverIn} onMouseLeave={this.onHoverOut} className="help-btn">
                    {this.state.hovered
                        ? <HoverInfo
                            text="Write a brief statement highlighting your knowledge, skills, and achievements. Be bold!
                            This is no place for modesty. Keep your profile short and to the point."
                            >
                        </HoverInfo>
                        : null }
                        <i className="far fa-question-circle"></i>
                    </button>
                </section>
                <section className="save-section-wrap">
                    {this.state.canSave
                    ?<SaveSection
                    display={'you must save the changes on this page'}
                    required={this.state.value} //object or info required before saving
                    storageName={this.props.userId + "_profile"}
                    updateParents={this.props.updateComplete}
                    />
                    : null}
                </section>
                <section className="sec-form-wrap">
                    <section className="mult-form">
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
                                length="1000"
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