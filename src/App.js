import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from './comp/footer';
import FromTo from './subpages/fromTo';
import Future from './subpages/future';
import Header from './comp/header';
import Help from './subpages/help';
import Main from './subpages/main';

function App() {
  return (
    <Router>
      <div
        className="container-fluid"
        style={{
          maxWidth: '100vw',
          overflow: 'hidden',
          padding: 0,
        }}
      >
        <Header />
        <Switch>
          <Route component={Help} path="/help" />
          <Route component={FromTo} path="/from-to" />
          <Route component={Future} path="/future" />
          <Route component={Main} path="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
