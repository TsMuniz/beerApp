import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import api from '../../../config/api';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import styles from './styles.module.scss';

function FormLogin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isDisableBtn, setIsDisableBtn] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  const authContext = useContext(AuthContext);
  const { setAuth } = authContext;

  const MIN = 6;
  const HTTP_OK = 200;

  useEffect(() => {
    function validateLogin() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (emailRegex.test(email) && password.length >= MIN) {
        return setIsDisableBtn(false);
      } return setIsDisableBtn(true);
    } validateLogin();
  }, [email, password]);

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/register';
    navigate(path);
  };

  async function redirectUser(role) {
    switch (role) {
    case 'customer': return navigate('/customer/products');
    case 'seller': return navigate('/seller/orders');
    case 'administrator': return navigate('/admin/manage');
    default:
      navigate('/');
    }
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const response = await api.post('/login', { email, password });
      if (response.status === HTTP_OK) {
        setErrorMessage(false);
        setAuth(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        redirectUser(response.data.role);
      }
    } catch (error) {
      if (error.response.status) {
        return setErrorMessage('Email ou senha inválidos');
      } return setErrorMessage(false);
    }
  }

  return (
    <form
      onSubmit={ handleSubmit }
      className={ styles.form }
    >

      <input
        type="text"
        name="email"
        id="input-email"
        placeholder="email@email.com"
        className="FormieldInput"
        onChange={ ({ target }) => { setEmail(target.value); } }
        value={ email }
      />

      <input
        type="password"
        name="password"
        id="input-password"
        placeholder="********"
        onChange={ ({ target }) => { setPassword(target.value); } }
        value={ password }
      />

      <button
        type="submit"
        disabled={ isDisableBtn }
      >
        LOGIN
      </button>
      <button
        type="button"
        onClick={ routeChange }
      >
        Ainda não tenho conta
      </button>
      {
        errorMessage && (
          <ErrorMessage>
            { errorMessage }
          </ErrorMessage>
        )
      }
    </form>
  );
}

export default FormLogin;
