import React, { Component } from 'react';
import './App.css';
import './core/resources/css/Page.css';
import { 
  Header, Footer, Homepage
} from './core/resources/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <div style={{marginTop:128}} >
            <Switch>
              <Route exact path="/"     component={Homepage} />
              <Route path="/:id"        component={Homepage} />
            </Switch>
          </div>
        <Footer />
      </Router>
    );
  }
}