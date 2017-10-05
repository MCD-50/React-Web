"use strict";

//from system
import React, { Component } from 'react';
import GoogleLogin from 'clone-react-google-login';
import { extendObservable } from "mobx";
import { observer, } from "mobx-react";
import PropTypes from 'prop-types';

import { makeRequest } from './../helper/internet';

const propTypes = {
	appReducer: PropTypes.object.isRequired,
	appAction: PropTypes.object.isRequired,
};

class LoginComponent extends Component {

	constructor(props) {
		//first method that gets called when we try to insert component to dom 
		super(props);
		
		extendObservable(this, {
			data: {
				isMounted: false,
				isMounting: false,
				isLogged: false,
			}
		});

		//register helpers here
		this.onTextClick = this.onTextClick.bind(this);
		this.makeDataRequest = this.makeDataRequest.bind(this);

	}

	//lifecycle methods
	componentWillMount() {
		//when component is getting mounted
		this.data.isMounting = true;
	}

	componentWillUnmount() {
		//when component is removed from dom
		this.data = { isMounted: false, isMounting: false, isLogged: false };
	}

	componentDidMount() {
		//when component is mounted
		this.data = { isMounted: true, isMounting: false, isLogged: false, };
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
		console.log(this.props, e);
		this.props.appAction.toogleLogin();
		this.props.appAction.toogleSidebar();
		//this.data.isMounted = !this.data.isMounted;
	}

	makeDataRequest(res) {
		if (res && res.profileObj) {
			const payload = {
				email: res.profileObj.email,
				name: res.profileObj.name,
				googleId: res.googleId || res.profileObj.googleId,
				googleAccessToken: res.accessToken || res.tokenObj.accessToken,
				googleTokenId: res.tokenId || res.tokenObj.id_token,
			};

			makeRequest('/addUser', 'POST', null, payload)
				.then((result) => {
					if (result && result.res.data && result.res.data.message && result.res.data.message.isLogged) {
						this.data.isLogged = true;
					}
				}).catch((err) => {
					console.log(err);
				});
		}
	}

	//render methods

	render() {
		return (
			<div>
				<GoogleLogin
					clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
					buttonText="Login"
					onSuccess={(res) => this.makeDataRequest(res)}
					onFailure={(err) => {
						console.log(err);
					}}
				/>,
				<p onClick={this.onTextClick}>Change State</p>
				{this.data.isMounted ? 'hi' : 'bye'}
				{this.data.isLogged ? 'Logged' : 'Not logged'}
			</div>
		);
	}
}

LoginComponent.propTypes = propTypes;
export default observer(LoginComponent);