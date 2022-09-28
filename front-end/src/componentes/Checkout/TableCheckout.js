import React from 'react';
import OrderDetailsTable from '../OrderDetailsTable/OrderDetailsTable';

function TableCheckout() {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <OrderDetailsTable />
    </table>
  );
}

export default TableCheckout;
