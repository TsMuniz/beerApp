import PropTypes from 'prop-types';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function NavBarLink({ name, path }) {
  const handleRedirection = () => <Navigate to={ path } />;
  return (
    <button
      onClick={ handleRedirection }
      type="button"
    >
      {name}
    </button>
  );
}

NavBarLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
