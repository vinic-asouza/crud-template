import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

// import Header from '../../components/Header';

import Pessoas from '../../components/Pessoas';

import { Container } from './styles';

export default function Main() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/pessoas" component={Pessoas} />
      </Container>
    </BrowserRouter>
  );
}
