import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../../../config/api';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import styles from './styles.module.scss';

function FormRegister() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [isDisableBtn, setIsDisableBtn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);

  const MIN_PASSWORD = 6;
  const MIN_NAME = 12;
  const HTTP_CREATED = 201;

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
    try {
      event.preventDefault();
      const response = await api.post('/register', { name, email, password });
      if (response.status === HTTP_CREATED) {
        setIsLogged(true);
        setErrorMessage(false);
        // setUser(response.data);
      }
    } catch (error) {
      setErrorMessage(false);
      return setErrorMessage('Usuário já registrado.');
    }
  }

  return (
    isLogged ? (
      <Navigate to="/customer/products" />
    ) : (
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
    )
  );
}

export default FormRegister;
