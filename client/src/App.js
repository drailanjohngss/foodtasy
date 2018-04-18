import React, { Component } from 'react';
import './css/App.css';
import NavbarComponent from './components/navbar';

class App extends Component {
	state = {
		response: ''
	};

	callApi = async () => {
		const response = await fetch('/home');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res.express }))
			.catch(err => console.log(err));
	}

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
