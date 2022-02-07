import React from 'react';
import { Container , Logo } from './styles';

const Navbar = ({ imageSrc }) => (
  <Container>
    <Logo src={imageSrc} />
  </Container>
)

export { Navbar };