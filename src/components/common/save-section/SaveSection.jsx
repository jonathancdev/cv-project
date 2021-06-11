import React, { Component } from 'react';
import { storeObjects } from '../../common'
import './SaveSection.css';

class SaveSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.display,
            saveBtn: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.propsExist = this.propsExist.bind(this);
        this.btnToggle = this.btnToggle.bind(this);
        storeObjects()
    }
    
    propsExist() {
        if (this.props.required !== undefined ) {
            if (Array.isArray(this.props.required)) {
                alert(JSON.stringify(this.props.required))
                const array = this.props.required
                let count = 1
                array.forEach((obj) => {
                    localStorage.setObject((this.props.storageName + count), obj)
                    count += 1
                })
                return array

            } else {
                localStorage.setItem(this.props.storageName, this.props.required)
            }
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
    
    btnToggle () {
        this.setState({
            saveBtn: true
        })
    }
    handleClick = () => {
        this.propsExist()

        this.setState({
            display: "changes saved successfully"
        })

        this.btnToggle();
        this.set()
      };

    render() {
        return(
            <section className="save-section">
                <p className="save-message">{this.state.display}</p>
                <button className="save-button" onClick={this.handleClick} disabled={this.state.saveBtn}>save</button>
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