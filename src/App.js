import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';


const Hats = () => {
  return <h1>Hats</h1>
}

class App extends Component {
  render() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={Hats} />

    </div>
  );  
}
}

export default App;
