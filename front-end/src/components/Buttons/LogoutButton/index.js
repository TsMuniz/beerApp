import React from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

function ButtonLogout() {
  const { name } = JSON.parse(localStorage.getItem('user'));
  return (

    <div
      className={ styles.wrapper }
    >
      <p>{name}</p>
      <Link
        to="/"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ () => localStorage.removeItem('user') }
      >
        <button
          type="button"
        >
          <FiX />
        </button>
      </Link>
    </div>
  );
}

export default ButtonLogout;
