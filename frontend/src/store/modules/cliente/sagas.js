/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { createClienteFailure, updateClienteFailure } from './actions';

export function* create({ payload }) {
  try {
    const {
      cli_razao,
      cli_fantasia,
      cli_endereco,
      cli_complemento,
      cli_bairro,
      cli_cep,
      cid_id,
      cli_doc1,
      cli_doc2,
      cli_doc3,
      cli_fone1,
      cli_fone2,
      cli_fone3,
      cli_website,
      cli_email,
      tcl_id,
      ccl_id,
      scl_id,
      ent_id,
      sts_id,
    } = payload;

    yield call(api.post, 'clientes', {
      cli_razao,
      cli_fantasia,
      cli_endereco,
      cli_complemento,
      cli_bairro,
      cli_cep,
      cid_id,
      cli_doc1,
      cli_doc2,
      cli_doc3,
      cli_fone1,
      cli_fone2,
      cli_fone3,
      cli_website,
      cli_email,
      tcl_id,
      ccl_id,
      scl_id,
      ent_id,
      sts_id,
    });
    toast.success('Cliente Adicionado');
  } catch (err) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(createClienteFailure());
  }
}

export function* update({ payload }) {
  try {
    const {
      id,
      cli_razao,
      cli_fantasia,
      cli_endereco,
      cli_complemento,
      cli_bairro,
      cli_cep,
      cid_id,
      cli_doc1,
      cli_doc2,
      cli_doc3,
      cli_fone1,
      cli_fone2,
      cli_fone3,
      cli_website,
      cli_email,
      tcl_id,
      ccl_id,
      scl_id,
      ent_id,
      sts_id,
    } = payload;

    yield call(api.put, `clientes/${id}`, {
      cli_razao,
      cli_fantasia,
      cli_endereco,
      cli_complemento,
      cli_bairro,
      cli_cep,
      cid_id,
      cli_doc1,
      cli_doc2,
      cli_doc3,
      cli_fone1,
      cli_fone2,
      cli_fone3,
      cli_website,
      cli_email,
      tcl_id,
      ccl_id,
      scl_id,
      ent_id,
      sts_id,
    });

    // history.push('/clientes');
    toast.success('Cliente Atualizado');
  } catch (err) {
    toast.error('Falha na atualização, verifique os dados');
    yield put(updateClienteFailure());
  }
}

export function* remove({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `clientes/${id}`);

    toast.success('Cliente removido com sucesso!');
  } catch (err) {
    toast.error('Erro ao remover cliente, tente novamente.');
  }
}

export default all([
  takeLatest('@cliente/CREATE_CLIENTE_REQUEST', create),
  takeLatest('@cliente/UPDATE_CLIENTE_REQUEST', update),
  takeLatest('@cliente/REMOVE_CLIENTE_REQUEST', remove),
]);
