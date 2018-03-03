
import React from 'react';
import Counter from './Counter';
import AddCounter from './AddCounter';
import RemoveCounter from './RemoveCounter';
import ListDisplayer from './ListDisplayer';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducer';


const store = createStore(reducer);

const App = () => {
 return(

  <Provider store={store}>
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
  
  </Provider>);
}
export default App;