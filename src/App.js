import React from 'react';

import PageDefault from './components/PageDefault';
import FloatingBar from './components/FloatingBar';
import FixedBar from './components/FixedBar';
import StripedBars from './components/StripedBars';
import TechLevel from './components/TechLevel';

import Python from './assets/logos/python.png'
import Javascript from './assets/logos/javascript.png'
import Html from './assets/logos/html.png'
import Css from './assets/logos/css.png'
import './global.css';

function App() {
  return (
    <>
      <PageDefault>
        <FloatingBar/>
        <FixedBar/>
        <StripedBars/>
        <TechLevel Image={Python} language="Python" level="Intermediário" />
        <TechLevel Image={Javascript} language="Javascript" level="Intermediário" />
        <TechLevel Image={Html} language="Html" level="Intermediário" />
        <TechLevel Image={Css} language="Css" level="Intermediário" />
      </PageDefault>
    </>
  );
}

export default App;
