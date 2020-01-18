/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { createPessoaFailure, updatePessoaFailure } from './actions';

export function* create({ payload }) {
  try {
    const {
      name,
      nascimento,
      genero,
      documento,
      rua,
      numero,
      bairro,
      cidade,
      telefone,
      celular,
      email,
    } = payload;

    yield call(api.post, 'pessoas', {
      name,
      nascimento,
      genero,
      documento,
      rua,
      numero,
      bairro,
      cidade,
      telefone,
      celular,
      email,
    });
    toast.success('Pessoa Adicionada');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(createPessoaFailure());
  }
}

export function* update({ payload }) {
  try {
    const {
      id,
      name,
      nascimento,
      genero,
      documento,
      rua,
      numero,
      bairro,
      cidade,
      telefone,
      celular,
      email,
    } = payload;

    yield call(api.put, `pessoas/${id}`, {
      name,
      nascimento,
      genero,
      documento,
      rua,
      numero,
      bairro,
      cidade,
      telefone,
      celular,
      email,
    });

    // history.push('/clientes');
    toast.success('Pessoa Atualizado');
  } catch (err) {
    toast.error('Falha na atualização, verifique os dados');
    yield put(updatePessoaFailure());
  }
}

export function* remove({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `pessoas/${id}`);

    toast.success('Pessoa removida com sucesso!');
  } catch (err) {
    toast.error('Erro ao remover pessoa, tente novamente.');
  }
}

export default all([
  takeLatest('@pessoa/CREATE_PESSOA_REQUEST', create),
  takeLatest('@pessoa/UPDATE_PESSOA_REQUEST', update),
  takeLatest('@pessoa/REMOVE_PESSOA_REQUEST', remove),
]);
