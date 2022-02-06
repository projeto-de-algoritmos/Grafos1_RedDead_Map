import React from 'react';
import { Container , Logo, Text } from './styles';

const Navbar = ({ imageSrc }) => (
  <Container>
    <Logo src={imageSrc} />
    <Text>Red Dead Redemption Map</Text>
  </Container>
)

export { Navbar };