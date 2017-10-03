//from system
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//from app
import Store from '../store/store';

import { getAll } from '../helper/database';
import { getCreatedOn, getDateTime, } from '../helper/collection'
import { PRICOLOR } from '../helper/constant'

//import Store from '../store/Store';


// const childContextTypes = {
// 	notes: React.PropTypes.array,
// 	tasks: React.PropTypes.array,
// };

class Home extends Component {
	
	constructor(props) {
		//first method that gets called when we try to insert component to dom 
		super(props);
		this.state = {
			isMounted: false,
			isMounting: false,
		};
		//register methods here

	}

	//lifecycle methods
	componentWillMount() {
		//when component is getting mounted
		this.setState({ isMounting: true });
	}

	componentWillUnmount() {
		//when component is removed from dom
		this.setState({ isMounted: false, isMounting:false });
	}

	componentDidMount() {
		//when component is mounted
		this.setState({ isMounted: true, isMounting:false });
	}

	componentWillReceiveProps(nextProps){
		//when component receive prop after mount
	}

	shouldComponentUpdate(nextProps, nextState){
		//check if both are same return false else true
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		//before component update
	}

	componentDidUpdate(prevProps, prevState){
		//after component update
	}

	//helper methods


	//render methods

	render() {
		return (
			<div>
				<p>ad,dvbksjvdbdvsdvsjskjsdbdvdfb</p>
			</div>
		)
	}
}

export default Home;