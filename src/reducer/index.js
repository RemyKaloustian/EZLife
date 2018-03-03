import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import displayReducer from './displayReducer';
import {routerReducer} from 'react-router-redux';


//THIS IS THE STORE
const counterApp = combineReducers({
  counterReducer, displayReducer,
  routing: routerReducer
})

export default counterApp