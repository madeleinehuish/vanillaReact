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
			</BrowserRouter>
		)
	}
}

export default App;
