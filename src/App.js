import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About'
import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default App;
