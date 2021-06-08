import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Results from './components/pages/Results';
import Squareroot from './components/pages/Squareroot';
// import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div className="App">
    {/* <h1>RealEstate</h1> */}
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/squareroot' component={Squareroot}/>
        <Route path='/results' component={Results}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
