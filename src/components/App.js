
import React from 'react';
import Counter from './Counter';
import AddCounter from './AddCounter';
import RemoveCounter from './RemoveCounter';
import ListDisplayer from './ListDisplayer';

const App = () => {
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
  </div>);
}
export default App;