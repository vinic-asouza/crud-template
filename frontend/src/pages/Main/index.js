import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../../components/Header';

import Clientes from '../../components/Clientes';

import { Container } from './styles';

export default function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route path="/clientes" component={Clientes} />
      </Container>
    </BrowserRouter>
  );
}
