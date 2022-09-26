import React, { useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function FormLogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisableBtn, setIsDisableBtn] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);

  const MIN = 6;
  const HTTP_NOT_FOUND = 404;
  const HTTP_OK = 200;

  useEffect(() => {
    function validateLogin() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailRegex.test(email) && password.length >= MIN) {
        return setIsDisableBtn(false);
      } return setIsDisableBtn(true);
    } validateLogin();
  }, [email, password]);

  const login = async () => {
    try {
      const response = await axios.get('http://localhost:3001/login', { email, password });

      if (response.status === HTTP_OK) {
        setIsLogged(true);
        setErrorMessage(false);
      }
    } catch (error) {
      if (error.response.status === HTTP_NOT_FOUND) {
        return setErrorMessage('email ou senha invalidos');
      } return setErrorMessage(false);
    }
  };

  return (
    isLogged ? (
      <Navigate to="/customer/products" />
    ) : (
      <form>
        <input
          type="text"
          name="email"
          placeholder="Ex: email@email.com"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => { setEmail(target.value); } }
          value={ email }
        />
        <input
          type="password"
          name="password"
          placeholder="******"
          data-testid="common_login__input-password"
          onChange={ ({ target }) => { setPassword(target.value); } }
          value={ password }
        />
        <button
          type="button"
          disabled={ isDisableBtn }
          data-testid="common_login__button-login"
          onClick={ login }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
        <p data-testid="common_login__element-invalid-email">
          { errorMessage }
        </p>
      </form>)
  );
}

export default FormLogin;
