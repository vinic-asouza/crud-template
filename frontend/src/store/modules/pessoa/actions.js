/* eslint-disable camelcase */

export function createPessoaRequest(
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
) {
  return {
    type: '@pessoa/CREATE_PESSOA_REQUEST',
    payload: {
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
    },
  };
}

export function createPessoaSuccess(pessoa) {
  return {
    type: '@pessoa/CREATE_PESSOA_SUCCESS',
    payload: { pessoa },
  };
}

export function createPessoaFailure() {
  return {
    type: '@pessoa/CREATE_PESSOA_FAILURE',
  };
}

export function updatePessoaRequest(
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
) {
  return {
    type: '@pessoa/UPDATE_PESSOA_REQUEST',
    payload: {
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
    },
  };
}

export function updatePessoaSuccess(pessoa) {
  return {
    type: '@pessoa/UPDATE_PESSOA_SUCCESS',
    payload: { pessoa },
  };
}

export function updatePessoaFailure() {
  return {
    type: '@pessoa/UPDATE_PESSOA_FAILURE',
  };
}

export function removePessoaRequest(id) {
  return {
    type: '@pessoa/REMOVE_PESSOA_REQUEST',
    payload: { id },
  };
}
