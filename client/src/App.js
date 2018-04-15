import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import NavbarComponent from './components/navbar';

class App extends Component {
	state = {
		response: ''
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	render() {
		return (
			<div className="App">
				<NavbarComponent />
				<p className="App-intro">{this.state.response}</p>
			</div>
		);
	}
}

export default App;
