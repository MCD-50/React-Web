import { combineReducers } from 'redux'

//import all reducers here
import appReducer from './appReducer'

const rootReducer = combineReducers({
    appReducer
})

export default rootReducer