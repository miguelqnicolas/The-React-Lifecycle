import React from 'react';
import axios from 'axios';
import Card from './Card';
import Header from './Header';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			userData: {},
			followerData: []
		}
	}

	componentDidMount() {
		axios.get('https://api.github.com/users/miguelqnicolas')
			.then(response => {
				this.setState({
					userData: response.data
				})
			})
			.catch(error => {
				console.log(error);
			})
		
		axios.get('https://api.github.com/users/miguelqnicolas/followers')
			.then(response => {
				console.log(response);
				this.setState({
					followerData: response.data
				})
			})
			.catch(error => {
				console.log(error);
			})
	}

	render() {
		return (
			<>
				<Header/>
				<Card userData={this.state.userData} followerData={this.state.followerData}/>
			</>
		)
	}
}

export default App;
