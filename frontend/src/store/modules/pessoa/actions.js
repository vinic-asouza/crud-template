/* eslint-disable camelcase */

export function createPessoaRequest(
  pss_nome,
  pss_sobrenome,
  pss_tipo,
  pss_nascimento,
  pss_genero,
  pss_email,
  cid_id,
  pss_logradouro,
  pss_numero,
  pss_complemento,
  pss_fone1,
  pss_fone2,
  pss_fone3,
  pss_bairro,
  pss_cep,
  pss_cpf,
  pss_rg,
  pss_cns,
  pss_estado_civil,
  cli_id,
  tps_id,
  ent_id,
  con_id
) {
  return {
    type: '@pessoa/CREATE_PESSOA_REQUEST',
    payload: {
      pss_nome,
      pss_sobrenome,
      pss_tipo,
      pss_nascimento,
      pss_genero,
      pss_email,
      cid_id,
      pss_logradouro,
      pss_numero,
      pss_complemento,
      pss_fone1,
      pss_fone2,
      pss_fone3,
      pss_bairro,
      pss_cep,
      pss_cpf,
      pss_rg,
      pss_cns,
      pss_estado_civil,
      cli_id,
      tps_id,
      ent_id,
      con_id,
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
  pss_nome,
  pss_sobrenome,
  pss_tipo,
  pss_nascimento,
  pss_genero,
  pss_email,
  cid_id,
  pss_logradouro,
  pss_numero,
  pss_complemento,
  pss_fone1,
  pss_fone2,
  pss_fone3,
  pss_bairro,
  pss_cep,
  pss_cpf,
  pss_rg,
  pss_cns,
  pss_estado_civil,
  cli_id,
  tps_id,
  ent_id,
  con_id
) {
  return {
    type: '@pessoa/UPDATE_PESSOA_REQUEST',
    payload: {
      id,
      pss_nome,
      pss_sobrenome,
      pss_tipo,
      pss_nascimento,
      pss_genero,
      pss_email,
      cid_id,
      pss_logradouro,
      pss_numero,
      pss_complemento,
      pss_fone1,
      pss_fone2,
      pss_fone3,
      pss_bairro,
      pss_cep,
      pss_cpf,
      pss_rg,
      pss_cns,
      pss_estado_civil,
      cli_id,
      tps_id,
      ent_id,
      con_id,
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
