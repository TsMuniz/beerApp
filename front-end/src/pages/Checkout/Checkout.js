import React from 'react';
import Address from '../../componentes/Checkout/AddressCheckout';
import CustomerCheckoutTable from '../../componentes/Tables/CustomerCheckoutTable';
import CustomerOrderTotalPrice
  from '../../componentes/TotalPrice/CustomerOrderTotalPrice';

export default function Checkout() {
  return (
    <div>
      <CustomerCheckoutTable />
      <CustomerOrderTotalPrice testIdPrefix="customer_checkout" />
      <Address />
    </div>
  );
}
