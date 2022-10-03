import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function ButtonLogout() {
  return (
    <Link
      to="/"
      data-testid="customer_products__element-navbar-link-logout"
      onClick={ () => localStorage.removeItem('user') }
      className={ styles.wrapper }
    >
      <button
        type="button"
      >
        Sair
      </button>
    </Link>
  );
}

export default ButtonLogout;
