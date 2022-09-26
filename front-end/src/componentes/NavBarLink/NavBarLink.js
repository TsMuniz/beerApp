import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarLink({ name, path }) {
  return (
    <Link to={ path }>
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
};
