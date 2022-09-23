import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/ButtonLogout';

function NavBar({ userName }) {
  return (
    <div>
      <p>{ userName }</p>
      <ButtonLogout dataTestId="oi" />
    </div>
  );
}

NavBar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default NavBar;
