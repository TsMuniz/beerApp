import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export default function MobileMenu({ showMenu, setVisible }) {
  const visible = showMenu ? 'visible' : '';

  return (
    <div className={ [styles.container, styles[visible]].join(' ') }>
      <div className={ styles.content }>
        <Link to="/customer/products">
          Produtos
        </Link>
        <Link to="/customer/orders">
          Meus Pedidos
        </Link>
        <FiX
          onClick={ () => setVisible(false) }
        />
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  setVisible: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};
