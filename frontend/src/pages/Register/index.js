
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import logo from '~/assets/logo.png';

import { registerRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira o nome'),
  email: Yup.string()
    .email('Formato de email incorreto')
    .required('Insira o email'),
  password: Yup.string()
    .min(
      6,
      'Mínimo 6 caracteres'
    )
    .required('Insira sua senha'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(registerRequest(name, email, password));
  }

  return (
    <>
      {/* <img src={logo} alt="GoBarber" /> */}
      <h1>BarberApp</h1>
      <h3>Agenda Online</h3>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
