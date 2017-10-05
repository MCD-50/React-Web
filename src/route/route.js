import React from 'react';
import { Route, Switch } from 'react-router-dom';

//container
import AppContainer from '../container/appContainer';
import LoginContainer from '../container/loginContainer';

//component
import LoginComponent from '../component/loginComponent';


export default (
	<AppContainer>
		<LoginContainer>
			<Switch>
				<Route exact path="/" component={LoginComponent} />
			</Switch>
		</LoginContainer>
	</AppContainer>
);