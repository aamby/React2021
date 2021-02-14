import React from 'react';
import Nav from './components/Nav';
import Counters from './components/Counters';

const App = () => {
  console.log('App.render called');
  return (
    <div className="container-fluid">
      <Nav></Nav>
      <Counters></Counters>
    </div>
  );
}

export default App;
