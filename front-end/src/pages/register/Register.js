import React from 'react';
import FormRegister from '../../components/Forms/RegisterForm';
import styles from './styles.module.scss';

function Register() {
  return (
    <div
      className={ styles.register }
    >
      <FormRegister />
    </div>
  );
}

export default Register;
