import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import CurrentTime from './comp/currentTime';
import Footer from './comp/footer';
import Header from './comp/header';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <CurrentTime />
      <Footer />
    </div>
  );
}

export default App;
