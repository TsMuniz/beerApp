import React from 'react';
import OrdersTable from '../../componentes/OrdersTable/OrdersTable';
import TotalPrice from '../../componentes/OrdersTable/TotalPrice';

export default function Checkout() {
  return (
    <div>
      <OrdersTable prefixId="customer_checkout" />
      <TotalPrice prefixId="customer_checkout" />
    </div>
  );
}
