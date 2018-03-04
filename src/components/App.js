import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, HashRouter, IndexRoute } from 'react-router-dom'
import {browserHistory} from 'react-router';

import reducer from '../reducer';
import Counter from './Counter';
import AddCounter from './AddCounter';
import RemoveCounter from './RemoveCounter';
import ListDisplayer from './ListDisplayer';
import LoginView from '../views/LoginView';
import Board from '../views/Board';
import SettingsView from '../views/SettingsView';
import DetailsView from '../views/DetailsView';
import NewNoteView from '../views/NewNoteView';

const store = createStore(reducer);

export const App = () => {
 return(

  <Provider store={store}>
        <HashRouter history={browserHistory}>
        <div>
            <Route path="/login" component={LoginView}> </Route>
            <Route path="/board/:user" component={Board}></Route>  
            <Route path="/settings/:user" component={SettingsView}></Route>
            <Route path="/details/:note" component={DetailsView}></Route>
            <Route path="/new/:note" component={NewNoteView}></Route>
          </div>
        </HashRouter>
        
  </Provider>);
}
export default App;





/*
const testIfWorks = () =>{
  return(
    <div className="container">
      <Counter></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter></RemoveCounter>
        </div>
        <div className="column auto">
          <ListDisplayer></ListDisplayer>
        </div>
      </div>
  </div>
  );

}*/
