import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdFitnessCenter, MdAccountCircle } from 'react-icons/md';
import Notification from '~/components/Notifications';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <MdAccountCircle color="#1E90FF" size={40} />
          <Link to="/pessoas">PESSOAS</Link>
          <Link to="/register">USUÁRIOS</Link>
        </nav>

        <aside>
          <Notification />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/perfil">Meu perfil</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                `https://api.adorable.io/avatars/250/abott@adorable.png`
              }
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
