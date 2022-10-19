import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export default function MobileMenu() {
  return (
    <div className={ styles.container }>
      <Link to="/customer/products">
        Produtos
      </Link>
      <Link to="/customer/orders">
        Meus Pedidos
      </Link>
    </div>
  );
}
