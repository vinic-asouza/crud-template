/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/modules/auth/actions';

import { Container, Logo, Profile } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.auth.user);

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Container grid="12">
      <nav>
        <img src={logo} alt="Crud-App" />
        <Logo>
          <h1>CRUD</h1>
          <h2>APP</h2>
        </Logo>

        <Link to="/clientes">Clientes</Link>
      </nav>

      <aside>
        <Profile>
          <div>
            <strong>{user.name}</strong>
            <h5>{user.email}</h5>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </Profile>
      </aside>
    </Container>
  );
}
