import React from 'react';
import OrdersTable from '../../componentes/OrdersTable/OrdersTable';
import TotalPrice from '../../componentes/OrdersTable/TotalPrice';
import Address from '../../componentes/Checkout/AddressCheckout';

export default function Checkout() {
  return (
    <div>
      <OrdersTable prefixId="customer_checkout" />
      <TotalPrice prefixId="customer_checkout" />
      <Address />
    </div>
  );
}
