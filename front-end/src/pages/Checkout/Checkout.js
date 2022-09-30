import React from 'react';
import TotalPrice from '../../componentes/Checkout/TotalPrice';
import Address from '../../componentes/Checkout/AddressCheckout';
import CustomerCheckoutTable from '../../componentes/Tables/CustomerCheckoutTable';

export default function Checkout() {
  return (
    <div>
      <CustomerCheckoutTable />
      <TotalPrice prefixId="customer_checkout" />
      <Address />
    </div>
  );
}
