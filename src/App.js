import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/servicios" component={Services}/>
          <Route exact path="/contacto" component={Contact}/>
          <Route exact path="/**" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
