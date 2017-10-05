//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.object.isRequired,
};

//pure component
class AppContainer extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
AppContainer.propTypes = propTypes;
export default AppContainer;