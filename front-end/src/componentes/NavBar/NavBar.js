import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/ButtonLogout';

function NavBar({ userName, children }) {
  return (
    <div>
      {children}
      <p>{ userName }</p>
      <ButtonLogout dataTestId="oi" />
    </div>
  );
}

NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavBar;
