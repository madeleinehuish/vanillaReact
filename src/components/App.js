import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header';
import TodoMain from './Todo/TodoMain';
import ColorTest from './ColorTest/ColorTest';
import Aux from './Aux/Aux';
import styles from './App.css';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Aux>
					<Header />
					<Route path="/" exact component={TodoMain}/>
					<Route path="/class_test" exact component={ColorTest}/>
				</Aux>

				{/* <div className={styles.App}>
					<Header />
					<div className={styles.container}>
						<div className={styles.column}>
							<TodoMain/>
						</div>
						<div className={styles.column}>
							<ColorTest />
						</div>
					</div>
				</div> */}
			</BrowserRouter>
		)
	}
}

export default App;
