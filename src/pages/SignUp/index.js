import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import Logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A senha é obrigatorio'),
  name: Yup.string().required('O nome é obrigatorio'),
});

export default function SingUp() {
  function handleSignUp({ email, password }) {
    console.tron.log(email, password);
  }

  return (
    <>
      <img src={Logo} alt="Logo" />
      <Form schema={schema} onSubmit={handleSignUp}>
        <Input type="name" name="name" placeholder="Nome completo" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Entrar</button>
      </Form>

      <Link to="/">Já tenho login</Link>
    </>
  );
}
