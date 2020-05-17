import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './comp/header';
import CurrentTime from './comp/currentTime';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <CurrentTime />
    </div>
  );
}

export default App;
