import React from 'react';
import './global.css';

import PageDefault from './components/PageDefault';
import FloatingBar from './components/FloatingBar';
import FixedBar from './components/FixedBar';

function App() {
  return (
    <>
      <PageDefault>
        <FloatingBar/>
        <FixedBar/>
      </PageDefault>
    </>
  );
}

export default App;
