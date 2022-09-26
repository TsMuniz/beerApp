import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/ButtonLogout';

function NavBar({ children }) {
  const { name } = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      {children}
      <p>{ name }</p>
      <ButtonLogout dataTestId="oi" />
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
