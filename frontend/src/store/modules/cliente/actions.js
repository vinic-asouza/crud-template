/* eslint-disable camelcase */

export function createClienteRequest(
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
  sts_id
) {
  return {
    type: '@cliente/CREATE_CLIENTE_REQUEST',
    payload: {
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
    },
  };
}

export function createClienteSuccess(cliente) {
  return {
    type: '@cliente/CREATE_CLIENTE_SUCCESS',
    payload: { cliente },
  };
}

export function createClienteFailure() {
  return {
    type: '@cliente/CREATE_CLIENTE_FAILURE',
  };
}

export function updateClienteRequest(
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
  sts_id
) {
  return {
    type: '@cliente/UPDATE_CLIENTE_REQUEST',
    payload: {
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
    },
  };
}

export function updateClienteSuccess(cliente) {
  return {
    type: '@cliente/UPDATE_CLIENTE_SUCCESS',
    payload: { cliente },
  };
}

export function updateClienteFailure() {
  return {
    type: '@cliente/UPDATE_CLIENTE_FAILURE',
  };
}

export function removeClienteRequest(id) {
  return {
    type: '@cliente/REMOVE_CLIENTE_REQUEST',
    payload: { id },
  };
}
