import React, { Component } from 'react';
import styles from './ColorTest.css';

class ColorTest extends Component {

	red = {
		border: "1px solid",
		width: "40px",
		height: "40px",
		margin: "30px auto 0 auto",
		backgroundColor: "red",
		cursor: "pointer"
	}

	green = {
		border: "1px solid",
		width: "40px",
		height: "40px",
		margin: "30px auto 0 auto",
		backgroundColor: "green",
		cursor: "pointer"
	}

	state = {
		toggle: false,
		color: this.green
	}

	toggle = () => {
		if(this.state.toggle) {
			this.setState({ color: this.green, toggle: !this.state.toggle });
		} else {
			this.setState({ color: this.red, toggle: !this.state.toggle });
		}
	}

	render() {
		console.log('state: ', this.state);
		console.log('styles', styles, styles.colorTest);
		// const color = this.state.color;
		return (
			<div className={styles.colorTest}>
				Press the div below to toggle its class!
				<div style={this.state.color} onClick={this.toggle}></div>
			</div>
		)
	}
}

export default ColorTest;
