/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
// import Fab from '@material-ui/core/Fab';
import { Edit } from '@material-ui/icons';

import api from '../../services/api';

import { SmallContent, Actions, Aux } from '../../pages/Main/styles';

import { updatePessoaRequest } from '../../store/modules/pessoa/actions';

// const schema = Yup.object().shape({
//   cli_razao: Yup.string().required('*'),
//   cli_fantasia: Yup.string().required('*'),
//   cli_endereco: Yup.string().required('*'),
//   cli_bairro: Yup.string().required('*'),
//   cli_cep: Yup.string().required('*'),
//   cid_id: Yup.string().required('*'),
//   cli_doc1: Yup.string().required('*'),
//   cli_fone1: Yup.string().required('*'),
//   cli_email: Yup.string().required('*'),
//   tcl_id: Yup.string().required('*'),
//   ccl_id: Yup.string().required('*'),
//   scl_id: Yup.string().required('*'),
//   ent_id: Yup.string().required('*'),
//   sts_id: Yup.string().required('*'),
// });

export default function AtualizaPessoa(pssId) {
  const dispatch = useDispatch();

  const id = pssId.pssId;

  const [pessoas, setPessoa] = useState([]);

  useEffect(() => {
    async function loadPessoa() {
      const response = await api.get(`pessoas/${id}`);
      setPessoa(response.data);
    }
    loadPessoa();
  }, [id, pssId]);

  function handleSubmit({
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
  }) {
    dispatch(
      updatePessoaRequest(
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
      )
    );
  }

  return (
    <SmallContent grid="4">
      <Actions>
        <Edit />
        <h1>Nova Pessoa</h1>
      </Actions>
      <Aux>
        <Form initialData={pessoas} onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Nome</label>
            </li>
            <li>
              <Input name="name" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="nascimento">Data Nascimento</label>
              <label htmlFor="genero">Genero</label>
            </li>
            <li>
              <Input name="nascimento" />
              <Input name="genero" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="documento">Documento</label>
            </li>
            <li>
              <Input name="documento" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="rua">Endereco</label>
              <label htmlFor="numero">Número</label>
            </li>
            <li>
              <Input name="rua" />
              <Input name="numero" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="bairro">Bairro</label>
              <label htmlFor="cidade">Cidade</label>
            </li>
            <li>
              <Input name="bairro" />
              <Input name="cidade" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="telefone">Telefone</label>
              <label htmlFor="celular">Celular</label>
            </li>
            <li>
              <Input name="telefone" />
              <Input name="celular" />
            </li>
          </ul>
          <ul>
            <li>
              <label htmlFor="email">E-Mail</label>
            </li>
            <li>
              <Input name="email" />
            </li>
          </ul>
          <button type="submit">Atualizar</button>
        </Form>
      </Aux>
    </SmallContent>
  );
}
