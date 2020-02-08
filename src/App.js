import React, { Component } from 'react';
import './App.css';
import './core/resources/css/Page.css';
import { 
  Header, Footer, Homepage, NotFound
} from './core/resources/index';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <div style={{marginTop:128}} >
            <Switch>
              <Route exact path="/homepage"     component={Homepage} />
              <Route path="/homepage/:id"       component={Homepage} />
              <Route exact path="/">
                <Redirect to="/homepage" />
              </Route>
              <Route path="/:page"              component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </Router>
    );
  }
}