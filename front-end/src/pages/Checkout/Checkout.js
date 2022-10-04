import React from 'react';
import Address from '../../componentes/Checkout/AddressCheckout';
import CustomerCheckoutTable from '../../componentes/Tables/CustomerCheckoutTable';
import CustomerOrderTotalPrice
  from '../../componentes/TotalPrice/CustomerOrderTotalPrice';
import styles from './styles.module.scss';

export default function Checkout() {
  return (
    <div
      className={ styles.checkoutTemplate }
    >
      <CustomerCheckoutTable />
      <CustomerOrderTotalPrice testIdPrefix="customer_checkout" />
      <Address />
    </div>
  );
}
