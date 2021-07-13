import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Results from "./components/pages/Results";
import Squareroot from "./components/pages/Squareroot";
import Factorial from "./components/pages/Factorial";

import Login from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUp";
import { useStateValue } from "./components/ContextAPI/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const none = "";
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/" render={() => { return user ? <Home/> : <Redirect to={{pathname: '/login' }}/>}}/>
         <Route path="/login" component={Login} />
         <Route path="/signUp" component={SignUp} />
        <Route path="/squareroot" render={() => { return user ? <Squareroot/> : <Redirect to={{pathname: '/login' }}/>}}/>
        <Route path="/factorial" render={() => { return user ? <Factorial/> : <Redirect to={{pathname: '/login' }}/>}}/>
        <Route path="/results" render={() => { return user ? <Results/> : <Redirect to={{pathname: '/login' }}/>}}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
