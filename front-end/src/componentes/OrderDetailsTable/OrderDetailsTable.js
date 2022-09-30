import PropTypes from 'prop-types';
import React from 'react';
import TableRowItems from './TableRowItems';

export default function OrderDetailsTable({ userType, orders }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {
          orders.map((order, index) => {
            const subTotal = order.price * order.quantity;
            return (
              <tr key={ index }>
                <TableRowItems
                  testIdPrefix={ `${userType}_order_details` }
                  itemNumber={ index + 1 }
                  description={ order.name }
                  quantity={ order.quantity }
                  unityValue={ order.price }
                  subTotal={ subTotal }
                />
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

OrderDetailsTable.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ).isRequired,
  userType: PropTypes.string.isRequired,
};
