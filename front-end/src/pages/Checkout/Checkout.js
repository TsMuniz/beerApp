import React from 'react';
import TotalPrice from '../../componentes/Checkout/TotalPrice';
import Address from '../../componentes/Checkout/AddressCheckout';
import TableCheckout from '../../componentes/Checkout/TableCheckout';

export default function Checkout() {
  return (
    <div>
      <TableCheckout prefixId="customer_checkout" />
      <TotalPrice prefixId="customer_checkout" />
      <Address />
    </div>
  );
}
