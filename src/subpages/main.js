import React from 'react';

import CurrentTime from '../comp/currentTime';
import Footer from '../comp/footer';
import Header from '../comp/header';

function Main() {
  return (
    <div
      className="container-fluid"
      style={{ maxWidth: '100vw', overflow: 'hidden', padding: 0 }}
    >
      <Header />
      <CurrentTime />
      <Footer />
    </div>
  );
}

export default Main;
