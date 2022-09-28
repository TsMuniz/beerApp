import React from 'react';
import OrdersTable from '../../componentes/OrdersTable/OrdersTable';

export default function Checkout() {
  return (
    <div>
      <OrdersTable prefixId="customer_checkout" />
    </div>
  );
}
