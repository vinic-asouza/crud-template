import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
import SignUp from '../components/Usuarios/store';
import Pessoas from '../components/Pessoas/';
import Perfil from '../components/Perfil/';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} isPrivate />
      <Route path="/pessoas" component={Pessoas} isPrivate />
      <Route path="/perfil" component={Perfil} isPrivate />
    </Switch>
  );
}
