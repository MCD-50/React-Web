import { TOGGLE_LOGIN, TOGGLE_SIDEBAR } from '../../helper/constant'

const initialState = {
	isLoggedIn: false,
	isSidebarOpen: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case TOGGLE_LOGIN:
			state.isLoggedIn = !state.isLoggedIn
			return state;

		case TOGGLE_SIDEBAR:
			state.isSidebarOpen = !state.isSidebarOpen
			return state;

		default:
			return state
	}
}

export default appReducer;
