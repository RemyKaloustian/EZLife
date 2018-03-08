import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import displayReducer from './displayReducer';
import notesReducer from './notesReducer'
import {routerReducer} from 'react-router-redux';


//THIS IS THE STORE
const counterApp = combineReducers({
  counterReducer, displayReducer,notesReducer,
  routing: routerReducer
})

export default counterApp