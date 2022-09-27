import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarLink({ name, path, dataTestId }) {
  return (
    <Link to={ path } data-testid={ dataTestId }>
      <button
        type="button"
      >
        {name}
      </button>
    </Link>
  );
}

NavBarLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
