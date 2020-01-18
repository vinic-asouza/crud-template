/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import Fab from '@material-ui/core/Fab';
import { Edit, Check } from '@material-ui/icons';
import { SmallContent, Actions, Aux } from '../../pages/Main/styles';
import api from '../../services/api';
import { createPessoaRequest } from '../../store/modules/pessoa/actions';

export default function CadastraPessoa() {

  const dispatch = useDispatch();

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
      createPessoaRequest(
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
        <Form onSubmit={handleSubmit}>
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
          <button type="submit">Cadastrar</button>
        </Form>
      </Aux>
    </SmallContent>
  );
}
