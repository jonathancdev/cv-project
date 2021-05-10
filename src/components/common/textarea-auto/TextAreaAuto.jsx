import React, { Component } from 'react';
import './TextAreaAuto.css'

class TextAreaAuto extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
			rows: this.props.rows,
			minRows: this.props.minRows,
			maxRows: this.props.maxRows,
		};

	}
	
	handleChange = (event) => {
		const lineHeight = 30;
		const { minRows, maxRows } = this.state;
		const prevRows = event.target.rows;
  	    event.target.rows = minRows;
		const currRows = ~~(event.target.scrollHeight / lineHeight);
		if (currRows === prevRows) {
			event.target.rows = currRows;
		}
		if (currRows >= maxRows) {
			event.target.rows = maxRows;
			event.target.scrollTop = event.target.scrollHeight;
		}
		this.setState({
			value: event.target.value,
		rows: currRows < maxRows ? currRows : maxRows,
		});
		this.props.setValue(event) //passed from Profile
	};
	
	render() {
		return (
			<textarea
				ref={this.props.refA} //reference to itself
				rows={this.state.rows}
				value={this.props.value}
				placeholder={this.props.placeholder}
				className={this.props.className}
				onChange={this.handleChange.bind(this)}
			/>
		);
	}
}


export default TextAreaAuto;