import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import displayReducer from './displayReducer';


//THIS IS THE STORE
const counterApp = combineReducers({
  counterReducer, displayReducer
})

export default counterApp