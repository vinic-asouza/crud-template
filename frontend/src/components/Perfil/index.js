import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import AvatarInput from './AvatarInput';

// import { Container } from './styles';

import { Container, MainContent, Aux } from '../../pages/Main/styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <MainContent grid="4">
        <Aux>
          <Form initialData={profile} onSubmit={handleSubmit}>
            <AvatarInput name="avatar_id" />
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
                <Input name="email" type="email" />
              </li>
            </ul>
            <ul>
              <li>
                <label htmlFor="oldPassword">Senha Atual</label>
              </li>
              <li>
                <Input name="oldPassword" type="password" />
              </li>
            </ul>
            <ul>
              <li>
                <label htmlFor="password">Nova Senha</label>
              </li>
              <li>
                <Input name="password" type="password" />
              </li>
              <li>
                <label htmlFor="password">Confirmar Nova Senha</label>
              </li>
              <li>
                <Input
                  name="confirmPassword"
                  type="password"
                />
              </li>
            </ul>
            <button type="submit">Atualizar perfil</button>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Form>
        </Aux>
      </MainContent>
    </Container>
  );
}
