import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonLogout({ dataTestId }) {
  return (
    <Link to="/" data-testid={ dataTestId }>
      Sair
    </Link>
  );
}

ButtonLogout.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default ButtonLogout;
