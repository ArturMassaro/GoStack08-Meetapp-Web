import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '~/components/Modal';

import Logo from '~/assets/logo.svg';
import { Container, Content, Perfil } from './styles';

import { logOutRequest } from '~/store/modules/auth/actions';

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOutRequest());
  }

  return (
    <>
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
            <button type="button" onClick={() => setShowModal(!showModal)}>
              Sair
            </button>
          </Perfil>
        </Content>
      </Container>
      <Modal
        show={showModal}
        onClose={() => setShowModal(!showModal)}
        title="Sair ?"
        onAction={handleLogout}
      >
        Certeza que gostaria de fazer logout ?
      </Modal>
    </>
  );
}
