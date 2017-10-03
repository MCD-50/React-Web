//from system
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { extendObservable } from "mobx"
import { observer } from "mobx-react"
import GoogleLogin from 'react-google-login';


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
		extendObservable(this, {
			data: {
				isMounted: false,
				isMounting: false,
			}
		});


		//register helpers here
		this.onTextClick = this.onTextClick.bind(this);
		
	}

	//lifecycle methods
	componentWillMount() {
		//when component is getting mounted
		this.data.isMounting = true;
	}

	componentWillUnmount() {
		//when component is removed from dom
		this.data = { isMounted: false, isMounting: false, }
	}

	componentDidMount() {
		//when component is mounted
		this.data = { isMounted: true, isMounting: false }
	}

	componentWillReceiveProps(nextProps) {
		//when component receive prop after mount

	}

	shouldComponentUpdate(nextProps, nextState) {
		//check if both are same return false else true
		return true;
	}

	componentWillUpdate(nextProps, nextState) {
		//before component update
	}

	componentDidUpdate(prevProps, prevState) {
		//after component update
	}

	//helper methods
	onTextClick(e) {
		this.data.isMounted = !this.data.isMounted;
	}

	//render methods

	render() {
		return (
			<div>
				<GoogleLogin
					clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={(res)=>{
						console.log(res);
					}}
					onFailure={(err)=>{
						console.log(err);
					}}
				/>,
				<p onClick={this.onTextClick}>Change State</p>
				{this.data.isMounted ? 'hi' : 'bye'}
			</div>
		)
	}
}

export default observer(Home);