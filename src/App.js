import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CurrentTime from './comp/currentTime';
import Footer from './comp/footer';
import FromToTime from './comp/fromToTime';
import Future from './comp/future';
import Header from './comp/header';
import Help from './comp/help';

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
          <Route component={FromToTime} path="/from-to" />
          <Route component={Future} path="/future" />
          <Route component={CurrentTime} path="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
