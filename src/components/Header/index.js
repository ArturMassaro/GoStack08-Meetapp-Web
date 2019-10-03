import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '~/assets/logo.svg';
import { Container, Content, Perfil } from './styles';

import { logOutRequest } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOutRequest());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/register">
            <img src={Logo} alt="MeetApp" />
          </Link>
        </nav>

        <Perfil>
          <div>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <button type="button" onClick={handleLogout}>
            Sair
          </button>
        </Perfil>
      </Content>
    </Container>
  );
}
