import React from 'react';
import FormLogin from '../../components/Forms/FormLogin';
import styles from './styles.module.scss';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div
      className={ styles.login }
    >
      <img src={ logo } alt="logotipo lotate cerveja" />
      <FormLogin />
    </div>
  );
}

export default Login;
