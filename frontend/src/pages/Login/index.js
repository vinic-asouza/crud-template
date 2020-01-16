/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { loginRequest } from '../../store/modules/auth/actions';

import { Wrapper, Content } from './styles';
import logo from '../../assets/logo.png';
// import Footer from '../../components/Footer';

const schema = Yup.object().shape({
  email: Yup.string().required('Insira seu login'),
  senha: Yup.string().required('Insira sua senha'),
});

export default function Login() {
  const dispatch = useDispatch();
  // const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, senha }) {
    dispatch(loginRequest(email, senha));
  }

  return (
    <>
      <Wrapper>
        <Content>
          <img src={logo} alt="JustCall" />
          <h1>JustCall</h1>
          <h2>Secretária</h2>

          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="login" placeholder="Login" />
            <Input name="senha" type="password" placeholder="Senha" />
            <button type="submit">Acessar</button>
            <Link to="/register">Registrar-se</Link>
          </Form>
        </Content>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}
