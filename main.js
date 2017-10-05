//from system
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { createHashHistory } from 'history'; // static app
import { Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//import from app
import routes from './src/route/route';
import reducer from './src/store/reducer'

// import './styles/App.css';
// import './styles/MediumDraft.css';
// import './helper/MediumDraft';

const store = createStore(reducer);

window.onload = () => {
	injectTapEventPlugin();
	render(
		<Router history={createHashHistory()}>
			<Provider store={store}>
				{routes}
			</Provider>
		</Router>, document.getElementById('app')
	)
}
