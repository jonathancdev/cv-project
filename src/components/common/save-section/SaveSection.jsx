import React, { Component } from 'react';
import './SaveSection.css';

class SaveSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: '',
            saveBtn: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.propsExist = this.propsExist.bind(this);
    }

    propsExist() { //save entire array, not to individual keys
        if (this.props.required !== undefined && this.props.required !== [] ) {
            if (Array.isArray(this.props.required)) {
                localStorage.setObject(this.props.storageName, this.props.required)
            } else {
                localStorage.setItem(this.props.storageName, this.props.required)
            }
        } else if (this.props.required === []) {
            localStorage.removeItem(this.props.storageName)
        }

        if (this.props.requiredB !== undefined ) {
            if (Array.isArray(this.props.required)) {
                localStorage.setItem(this.props.storageNameB, JSON.stringify(this.props.requiredB))
            } else {
                localStorage.setItem(this.props.storageNameB, this.props.requiredB)
            }
        }

    }

    set() {
        if (this.props.set) {
            this.props.set()
        }
    }
    

    handleClick = () => {
        this.propsExist()

        this.setState({
            display: "changes saved successfully!"
        })

        this.set()
        this.props.updateParents()
        this.props.hide()
      };

    render() {
        return(
            <section className="save-section">
                {/* <p className="save-message" disabled={this.props.hideMessage}>{this.state.display}</p> */}
                <button className="save-button" onClick={this.handleClick} disabled={this.props.hideButton}>save</button>
            </section>
        )
    }
}
export default SaveSection;
//conditionally render based on required data

// <section className="save-section-wrap">
    // {requiredStateItem !== ''
    // ?<SaveSection
    // display={'you must save the changes on this page'}
    // required={requiredStateItem} 
    // storageName="avatar"
    // />
    // : null}
// </section>