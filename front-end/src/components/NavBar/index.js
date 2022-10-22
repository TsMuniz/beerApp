import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiMenu } from 'react-icons/fi';
import ButtonLogout from '../Buttons/LogoutButton';
import styles from './styles.module.scss';
import MobileMenu from '../MobileMenu';

function NavBar({ children }) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={ styles.header }
    >
      <div className={ styles.headerContent }>
        <MobileMenu showMenu={ visible } setVisible={ setVisible } />
        <FiMenu
          onClick={ () => setVisible(!visible) }
          className={ styles.menu }
        />
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
