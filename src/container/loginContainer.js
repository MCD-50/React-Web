//from system
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//from app
import * as appAction from '../store/action/appAction';

import LoginComponent from '../component/loginComponent';

const propTypes = {
	appReducer: PropTypes.object.isRequired,
	appAction: PropTypes.object.isRequired,
};

//pure component
const LoginContainer = (props) => (
	<div>
		<LoginComponent appReducer={props.appReducer} appAction={props.appAction} />
	</div>
);

const mapStateToProps = state => ({
	appReducer: state.appReducer
});

const mapDispatchToProps = dispatch => ({
	appAction: bindActionCreators(appAction, dispatch)
});

//set PropTypes
LoginContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);