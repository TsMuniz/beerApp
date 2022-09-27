import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/ButtonLogout';

function NavBar({ children }) {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {children}
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name }
      </p>
      <ButtonLogout datatestid="customer_products__element-navbar-link-logout" />
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
