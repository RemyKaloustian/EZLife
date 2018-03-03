import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import {browserHistory} from 'react-router';

import reducer from '../reducer';
import Counter from './Counter';
import AddCounter from './AddCounter';
import RemoveCounter from './RemoveCounter';
import ListDisplayer from './ListDisplayer';
import LoginView from '../views/LoginView';
import Board from '../views/Board';

const store = createStore(reducer);

const App = () => {
 return(

  <Provider store={store}>
        <HashRouter history={browserHistory}>
        <div>
          <Route path="/login" component={LoginView}></Route>
          <Route path="/board" component={Board}></Route>  
          <Route path="/l" component={ListDisplayer}></Route>        
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
