import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';

export default function NavBarLink({ name, path, dataTestId }) {
  const { pathname } = useLocation();
  const isActive = pathname === path ? 'isActive' : '';
  return (
    <Link
      className={ [styles.wrapper, styles[isActive]].join(' ') }
      to={ path }
    >
      <button
        type="button"
        data-testid={ dataTestId }
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
