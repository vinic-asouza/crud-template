/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
import { Edit } from '@material-ui/icons';
import { MainContent, Actions, Aux } from '../../pages/_layouts/default/styles';
import { signUpRequest } from '../../store/modules/auth/actions';

import { MdFitnessCenter, MdAccountCircle } from 'react-icons/md';

export default function CadastraUsuario() {

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <MainContent grid="4">
        <Actions>
          <Edit />
          <h1>Cadastrar Usuário</h1>
        </Actions>
        <Aux>
          <MdAccountCircle color="#1E90FF" size={70} />
          <h1>CRUD Example</h1>
          <h3>React Application</h3>
          <br/>
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
                <label htmlFor="email">E-Mail</label>
              </li>
              <li>
                <Input name="email" />
              </li>
            </ul>
            <ul>
              <li>
                <label htmlFor="password">Senha</label>
              </li>
              <li>
                <Input name="password" type="password" />
              </li>
            </ul>
            <button type="submit">Cadastrar</button>
          </Form>
        </Aux>
      </MainContent>
    </>
  );
}
