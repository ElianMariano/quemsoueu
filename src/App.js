import React from 'react';
import ReactGA from 'react-ga';

import Router from './router';
import './global.css';
import tracking from './services/tracking';

ReactGA.initialize(tracking);
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
