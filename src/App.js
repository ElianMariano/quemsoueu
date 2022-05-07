import React from 'react';
import './global.css';

import PageDefault from './components/PageDefault';
import FloatingBar from './components/FloatingBar';
import FixedBar from './components/FixedBar';
import StripedBars from './components/StripedBars';

function App() {
  return (
    <>
      <PageDefault>
        <FloatingBar/>
        <FixedBar/>
        <StripedBars/>
      </PageDefault>
    </>
  );
}

export default App;
