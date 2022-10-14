/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../config/api';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import styles from './styles.module.scss';

function FormRegister() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [isDisableBtn, setIsDisableBtn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false);

  const MIN_PASSWORD = 6;
  const MIN_NAME = 12;
  const HTTP_CREATED = 201;

  const navigate = useNavigate();

  useEffect(() => {
    function validateLogin() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailRegex.test(email)
      && password.length >= MIN_PASSWORD
      && name.length >= MIN_NAME) {
        return setIsDisableBtn(false);
      } return setIsDisableBtn(true);
    } validateLogin();
  }, [name, email, password]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await api.post('/register', { name, email, password });
      if (response.status === HTTP_CREATED) {
        setErrorMessage(false);
        localStorage.setItem('user', JSON.stringify(response.data));
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        const bb = 3000;
        setTimeout(() => setRedirect(true), bb);
      }
    } catch (error) {
      setErrorMessage(false);
      return setErrorMessage('Usuário já registrado.');
    }
  }

  if (redirect) {
    navigate('/customer/products');
  }

  return (

    <form onSubmit={ handleSubmit } className={ styles.form }>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        onChange={ ({ target }) => { setName(target.value); } }
        value={ name }
      />
      <input
        type="email"
        name="email"
        placeholder="email@site.com.br"
        onChange={ ({ target }) => { setEmail(target.value); } }
        value={ email }
      />
      <input
        type="password"
        name="password"
        placeholder="*********"
        onChange={ ({ target }) => { setPassword(target.value); } }
        value={ password }
      />
      <button
        type="submit"
        disabled={ isDisableBtn }
      >
        CADASTRAR
      </button>
      {
        errorMessage && (
          <ErrorMessage dataTestId="common_register__element-invalid_register">
            { errorMessage }
          </ErrorMessage>
        )
      }
    </form>
  );
}

export default FormRegister;
