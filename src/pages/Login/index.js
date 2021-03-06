import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import LoginRequest from '../../store/modules/auth/actions';
import Logo from '../../assets/img/logo_ufmt_negativo_Prancheta.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail em formato válido')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(LoginRequest(email, password));
  }
  return (
    <>
      <img src={Logo} alt="Logotipo da UFMT" />
      <h1>Portal de Revistas</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
