import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';


class Header extends Component {
	// state = {
	// 	name: ''
	// }

	render() {
		return (
			<header className={styles.header}>
				<div className={styles.headerText}>Madeleine's Awesome Vanilla React App!</div>
				<div className={styles.links}>
					<Link to="/" className={styles.link}>ToDo</Link>
					<Link to="/class_test" className={styles.link2}>ClassFun</Link>
				</div>
			</header>
		)
	}
}

export default Header;
