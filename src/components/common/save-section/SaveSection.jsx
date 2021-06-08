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
        localStorage.setItem(this.props.storageName, this.props.required)
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