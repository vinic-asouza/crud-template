import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { MdFitnessCenter, MdAccountCircle } from 'react-icons/md';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de email não reconhecido')
    .required('Informe seu email'),
  password: Yup.string().required('Informe sua senha'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <MdAccountCircle color="#FFF" size={100} />
      <h1>CRUD Example</h1>
      <h3>React Application</h3>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
