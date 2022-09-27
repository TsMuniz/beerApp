import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ButtonLogout({ datatestid }) {
  return (
    <Link to="/" data-testid={ datatestid }>
      Sair
    </Link>
  );
}

ButtonLogout.propTypes = {
  datatestid: PropTypes.string.isRequired,
};

export default ButtonLogout;
