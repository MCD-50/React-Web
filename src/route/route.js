import React from 'react';
import { Route, Switch } from 'react-router-dom'

import App from '../component/appComponent';
import Home from '../component/homeComponent';

export default (
	<App>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/home" component={Home} />
		</Switch>
	</App>
);