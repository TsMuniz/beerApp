import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/ButtonLogout';

function NavBar({ userName, children }) {
  return (
    <div>
      { children }
      <p dataTestId="customer_products__element-navbar-user-full-name">
        { userName }
      </p>
      <ButtonLogout
        dataTestId="customer_products__element-navbar-link-logout"
      />
    </div>
  );
}

NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavBar;
