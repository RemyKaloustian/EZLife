// Module imports
import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, HashRouter, IndexRoute, Switch } from 'react-router-dom'
import {browserHistory} from 'react-router';

// File imports
import reducer from '../reducer';
import LoginView from '../views/LoginView';
import BoardView from '../views/BoardView';
import SettingsView from '../views/SettingsView';
import DetailsView from '../views/DetailsView';
import NewNoteView from '../views/NewNoteView';

const store = createStore(reducer);

export const App = () => {
 return(
  <Provider store={store}>
        <HashRouter history={browserHistory}>
          <div>            
            <Switch>
              <Route path="/login" component={LoginView}> </Route>
              <Route path="/board/:user" component={BoardView}></Route>  
              <Route path="/settings/:user" component={SettingsView}></Route>
              <Route path="/details/:user/:note" component={DetailsView}></Route>
              <Route path="/new/:user" component={NewNoteView}></Route>
            </Switch>
          </div>
        </HashRouter>        
  </Provider>);
}

export default App;
