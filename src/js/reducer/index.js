// Module imports
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

// File imports
import notesReducer from './notesReducer';


//THIS IS THE STORE, we add the notesReducer to it
const appReducer = combineReducers({
  notesReducer,
  routing: routerReducer
})

export default appReducer;