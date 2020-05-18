import React from 'react';

import CurrentTime from '../comp/currentTime';
import Footer from '../comp/footer';
import Header from '../comp/header';

function Main() {
  return (
    <div className="container-fluid">
      <Header />
      <CurrentTime />
      <Footer />
    </div>
  );
}

export default Main;
