import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} isPrivate />
      <Route path="/pessoas" component={Main} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
