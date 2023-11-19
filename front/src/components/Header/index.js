import React from 'react';
import { Container, Logo } from './styles';

export default function Header({ getUserLocation }) {
  return (
    <Container>
      <Logo>
        <span>Olá, Bem Vindo(a) ao</span>
        <h1>Meu IFC</h1>
      </Logo>
      <button onClick={getUserLocation} >Localização</button>
    </Container>
  );
}
