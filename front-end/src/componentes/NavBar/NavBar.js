import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/LogoutButton/ButtonLogout';
import styles from './styles.module.scss';

function NavBar({ children }) {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <div
      className={ styles.header }
    >
      <div
        className={ styles.separatorLeft }
      >
        { children }
      </div>
      <div
        className={ styles.separatorRigth }
      >
        <p
          className={ styles.userName }
          data-testid="customer_products__element-navbar-user-full-name"
        >
          { name }
        </p>
        <ButtonLogout />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
