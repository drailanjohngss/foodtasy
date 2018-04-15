import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import NavbarComponent from './components/navbar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavbarComponent />
			</div>
		);
	}
}

export default App;
