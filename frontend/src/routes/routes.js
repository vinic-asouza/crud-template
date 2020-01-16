import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoutes';

import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/clientes" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
