import React from 'react';
import SellerOrderDetailsTable from '../OrderDetailsTable/SellerOrderDetailsTable';

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
      <SellerOrderDetailsTable />
    </table>
  );
}

export default TableCheckout;