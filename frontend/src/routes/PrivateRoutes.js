/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { signed } = store.getState().auth;
  // const signed = false;

  return (
    <Route
      {...rest}
      render={props =>
        signed ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
