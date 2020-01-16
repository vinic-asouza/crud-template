/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    console.log([email, password]);

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    console.log(response.data);

    const { token, user } = response.data;

    // if (!user.provider) {
    //   toast.error('Usuário não é prestador de serviços');
    //   return;
    // }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));

    history.push('/clientes');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(loginFailure());
  }
}

export function* register({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: true,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');

    yield put(loginFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logout() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/REGISTER_REQUEST', register),
  takeLatest('@auth/LOGOUT', logout),
]);
