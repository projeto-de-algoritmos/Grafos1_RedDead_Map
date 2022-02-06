import React from 'react';

import logo from '../../assets/logo.png';

import { Navbar } from '../../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar imageSrc={logo} />
    </div>
  )
};

export { Home };