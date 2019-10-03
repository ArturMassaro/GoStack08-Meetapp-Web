import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';

import { updateRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const user = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    dispatch(updateRequest(data));
  }

  return (
    <Container>
      <Form initialData={user} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />
        <Input name="email" placeholder="E-mail" type="email" />
        <div />
        <Input
          name="oldpassword"
          placeholder="Senha atual"
          type="password"
          autocomplete="new-password"
        />
        <Input
          name="password"
          placeholder="Nova atual"
          type="password"
          autocomplete="off"
        />
        <Input
          name="confimpassword"
          placeholder="Cofirmação de senha"
          type="password"
        />
        <button type="submit">
          <MdAddCircleOutline size={27} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
