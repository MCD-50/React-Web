//from system
import React, { Component } from 'react';

//pure component
export default class AppContainer extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
