import React from 'react';
import PropTypes from 'prop-types';
import ButtonLogout from '../Buttons/LogoutButton';
import styles from './styles.module.scss';

function NavBar({ children }) {
  return (
    <div
      className={ styles.header }
    >
      <div className={ styles.headerContent }>
        <div
          className={ styles.separatorLeft }
        >
          { children }
        </div>
        <div
          className={ styles.separatorRigth }
        >
          <ButtonLogout />
        </div>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
