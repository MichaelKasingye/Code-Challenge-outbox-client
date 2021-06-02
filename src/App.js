import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Team from './components/pages/Team';

function App() {

  return (
    <div className="App">
    {/* <h1>RealEstate</h1> */}
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/teams' component={Team}/>
        <Route path='/products' component={Product}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
