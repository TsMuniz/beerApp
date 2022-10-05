import React from 'react';
import Address from '../../componentes/Checkout/AddressCheckout';
import CustomerCheckoutTable from '../../componentes/Tables/CustomerCheckoutTable';
import styles from './styles.module.scss';

export default function Checkout() {
  return (
    <div
      className={ styles.checkoutTemplate }
    >
      <CustomerCheckoutTable />
      <Address />
    </div>
  );
}
