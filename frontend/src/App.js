import React from 'react';
import './global.css';

import Routes from './routes';

import logo from './assets/logo.png';

import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar imageSrc={logo} />
      <Routes />
    </>
  );
}

export default App;
