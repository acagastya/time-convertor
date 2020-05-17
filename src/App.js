import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './comp/header';
import Footer from './comp/footer';
import CurrentTime from './comp/currentTime';

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
