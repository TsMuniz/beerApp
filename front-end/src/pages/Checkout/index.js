import React from 'react';
import Address from '../../components/Checkout/AddressCheckout';
import CustomerCheckoutTable from '../../components/Tables/CustomerCheckoutTable';
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
