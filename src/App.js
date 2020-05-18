import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import FromTo from './subpages/fromTo';
import Future from './subpages/future';
import Help from './subpages/help';
import Main from './subpages/main';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Help} path="/help" />
        <Route component={FromTo} path="/from-to" />
        <Route component={Future} path="/future" />
        <Route component={Main} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
