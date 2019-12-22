import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import Transactions from "./components/transaction.component";

var INITIAL_STATE = {
    auth:''
  }
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE };

    this.handler = this.handler.bind(this)
  }

  handler(val) {
    this.setState({
      auth: val
    })
  }

  render() {


  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Puntos Leal</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" render={props => (<Login handler = {this.handler}/>)} />
            <Route path="/transactions" render={props => (<Transactions auth = {this.state.auth}/>)}  />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
}

export default App;
