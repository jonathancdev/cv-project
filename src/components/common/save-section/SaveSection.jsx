import React, { Component } from 'react';
import './SaveSection.css';

class SaveSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: this.props.display
        }
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick = () => {
        if (Array.isArray(this.props.required)) {
            localStorage.setItem(this.props.storageName, JSON.stringify(this.props.required))
        } else {
            localStorage.setItem(this.props.storageName, this.props.required)
        }
        this.setState({
            display: "changes saved successfully"
        })
      };
    render() {
        return(
            <section className="save-section">
                <p className="save-message">{this.state.display}</p>
                <button className="save-button" onClick={this.handleClick}>save</button>
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