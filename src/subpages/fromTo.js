import React from 'react';

import FromToTime from '../comp/fromToTime';

import Footer from '../comp/footer';
import Header from '../comp/header';

function FromTo() {
  return (
    <div
      className="container-fluid"
      style={{ maxWidth: '100vw', overflow: 'hidden', padding: 0 }}
    >
      <Header />
      <FromToTime />
      <Footer />
    </div>
  );
}

export default FromTo;
